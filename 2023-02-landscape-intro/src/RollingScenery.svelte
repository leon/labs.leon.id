<script lang="ts">
	import { T } from '@threlte/core'
	import { MeshStandardMaterial } from 'three'
	import { PlaneGeometry } from 'three'
	import { degToRad } from 'three/src/math/MathUtils'
	import { createNoise2D } from 'simplex-noise'

	const geometry = new PlaneGeometry(40, 10, 40, 10)
	const material = new MeshStandardMaterial({ color: '#111111' })

	const noise = createNoise2D()
	const vertices = geometry.getAttribute('position').array

	let h = 0
	for (let i = 0; i < vertices.length; i += 3) {
		const x = vertices[i]
		const y = vertices[i + 1]
		// @ts-ignore
		// vertices[i + 2] = noise(x / 4, y / 4)
		vertices[i + 2] = h //
		h += 0.001
	}

	// needed for lighting
	geometry.computeVertexNormals()
</script>

<T.Mesh rotation.x={degToRad(-90)} {geometry} {material} />
