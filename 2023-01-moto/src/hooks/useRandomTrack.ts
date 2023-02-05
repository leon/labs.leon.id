import { ExtrudeGeometry, MathUtils, Shape } from 'three'
import { ColliderDesc, Vector3 } from '@dimforge/rapier3d-compat'

export interface TrackOptions {
	startLength?: number
	length?: number
	segment?: number
	depth?: number
	maxHeight?: number
}
export function useRandomTrack({
	startLength = 20,
	length = 1000,
	segment = 5,
	depth = 20,
	maxHeight = 16,
}: TrackOptions): {
	geometry: ExtrudeGeometry
	collider: ColliderDesc
} {
	// generate random points for the track, but without the points that close the shape
	const trackShape = generateShape()

	// generate a collider based on the track shape
	const collider = generateCollider(trackShape)

	// generate extrude geometry based on the track shape
	const geometry = generateGeometry(trackShape)

	return {
		geometry,
		collider,
	}

	function generateShape(): Shape {
		const path = new Shape()

		// start below ground so the bike doesn't interfere with the ground
		path.moveTo(0, -1)

		// create the rest of the track randomly
		const points = []
		let currentHeight = -1
		for (let l = 0; l < length; l += segment) {
			if (l < startLength) {
				points.push({ x: l, y: currentHeight })
				continue
			}
			currentHeight += MathUtils.randInt(-2, 1)
			currentHeight = MathUtils.clamp(currentHeight, 0, maxHeight)
			points.push({ x: l, y: currentHeight })
		}

		path.moveTo(0, -1)

		const gradient = (a, b) => (b.y - a.y) / (b.x - a.x)

		let t = 1
		let f = 0.3
		let m = 0
		let dx1 = 0
		let dy1 = 0
		let dx2 = 0
		let dy2 = 0
		let previousPoint = points[0]
		let nextPoint

		for (var i = 1, len = points.length; i < len; i++) {
			var currentPoint = points[i]
			nextPoint = points[i + 1]
			if (nextPoint) {
				m = gradient(previousPoint, nextPoint)
				dx2 = (nextPoint.x - currentPoint.x) * -f
				dy2 = dx2 * m * t
			} else {
				dx2 = 0
				dy2 = 0
			}

			path.bezierCurveTo(
				previousPoint.x - dx1,
				previousPoint.y - dy1,
				currentPoint.x + dx2,
				currentPoint.y + dy2,
				currentPoint.x,
				currentPoint.y
			)

			dx1 = dx2
			dy1 = dy2
			previousPoint = currentPoint
		}

		return path
	}

	function generateCollider(shape: Shape): ColliderDesc {
		const points = new Float32Array(
			shape.getPoints().flatMap((point) => [point.x, point.y, 0])
		)
		const polylineCollider = ColliderDesc.polyline(points)
		polylineCollider.setTranslation(0, 0, depth / 2)
		return polylineCollider
	}

	function generateGeometry(shape: Shape): ExtrudeGeometry {
		// first we close the shape, so that we can extrude it
		shape = shape.clone() // make sure we don't modify the original
		shape.lineTo(shape.currentPoint.x, -2)
		shape.lineTo(0, -2)
		shape.closePath()

		const geometry = new ExtrudeGeometry(shape, {
			depth,
			bevelEnabled: false,
		})

		return geometry
	}
}
