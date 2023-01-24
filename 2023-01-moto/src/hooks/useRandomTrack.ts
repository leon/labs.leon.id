import { ExtrudeGeometry, MathUtils, Shape } from 'three'
import { ColliderDesc, Vector3 } from '@dimforge/rapier3d-compat'

export interface TrackOptions {
	startLength?: number
	length?: number
	depth?: number
	maxHeight?: number
}
export function useRandomTrack({
	startLength = 20,
	length = 500,
	depth = 20,
	maxHeight = 10,
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

		// create the rest of the track randomly
		let currentHeight = 0
		for (let l = 0; l < length; l++) {
			if (l < startLength) {
				path.lineTo(l, currentHeight)
				continue
			}

			// switch height every 5 units
			if (l % 5 == 0) {
				currentHeight += MathUtils.randInt(-1, 1)
			}
			currentHeight = MathUtils.clamp(currentHeight, 0, maxHeight)
			path.lineTo(l, currentHeight)
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
		shape.lineTo(shape.currentPoint.x, -1)
		shape.lineTo(0, -1)
		shape.closePath()

		const geometry = new ExtrudeGeometry(shape, {
			depth,
			bevelEnabled: false,
		})

		return geometry
	}
}
