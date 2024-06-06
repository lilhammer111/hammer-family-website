<template>
    <div class="welcome">
        <Button label="Hey , Hammer" link class="p-button-lg" icon="pi pi-send" iconPos="right" @click="goHome" />
    </div>
    <canvas id="bubblesCanvas" ref="canvasRef"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'primeicons/primeicons.css'
import router from '@/router/index.js'

const goHome = () => {
    router.push({ name: 'home' })
}
const canvasRef = ref(null)

onMounted(() => {
    const canvas = canvasRef.value
    const ctx = canvas.getContext('2d')

    function resizeCanvas() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Bubble {
        constructor() {
            this.x = Math.random() * canvas.width
            this.y = Math.random() * canvas.height
            this.radius = Math.random() * 30 + 5
            this.speedX = (Math.random() - 0.5) * 2
            this.speedY = (Math.random() - 0.5) * 2
            // this.color = this.randomLightColor()
            // this.color = 'rgba(255, 192, 203, 0.8)' // 粉色
            this.color = '#32cd32' // 绿色
        }

        randomLightColor() {
            const r = Math.floor(Math.random() * 105) + 150
            const g = Math.floor(Math.random() * 105) + 150
            const b = Math.floor(Math.random() * 105) + 150
            return `rgba(${r}, ${g}, ${b}, 0.8)`
        }

        draw() {
            ctx.beginPath()
            const gradient = ctx.createRadialGradient(this.x, this.y, this.radius * 0.8, this.x, this.y, this.radius*1.2)
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)')
            gradient.addColorStop(1, this.color)
            ctx.fillStyle = gradient
            // ctx.fillStyle =this.color
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
        }

        update() {
            this.x += this.speedX
            this.y += this.speedY

            // 处理气泡超出边界的情况
            if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                this.speedX = -this.speedX
            }
            if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
                this.speedY = -this.speedY
            }
        }
    }

    const bubblesArray = []
    for (let i = 0; i < 60; i++) {
        bubblesArray.push(new Bubble())
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        bubblesArray.forEach(bubble => {
            bubble.update()
            bubble.draw()
        })
        requestAnimationFrame(animate)
    }

    animate()
})
</script>

<style>
.welcome {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:2;
}

#bubblesCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: #f5f9ff;*/
    background-color: #fff;
}
</style>
