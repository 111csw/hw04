const aliceTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
};

const aliceImages = [
    document.querySelector("#alice1"),
    document.querySelector("#alice2"),
    document.querySelector("#alice3"),
];

let isAnimating = false;

document.getElementById("startBtn").addEventListener("click", () => {
    if (!isAnimating) {
        isAnimating = true;
        animateImages();
        changeBackgroundColor(); // 开始改变背景颜色
    }
});

document.getElementById("stopBtn").addEventListener("click", () => {
    isAnimating = false;
});

function changeBackgroundColor() {
    setInterval(() => {
        if (isAnimating) {
            document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
    }, 1500); // 每3秒换一次颜色
}

async function animateImages() {
    for (let i = 0; i < aliceImages.length; i++) {
        const img = aliceImages[i];
        const desc = document.getElementById(`desc${i + 1}`);

        desc.style.opacity = 0; // 开始时隐藏描述
        await img.animate(aliceTumbling, aliceTiming).finished;

        desc.style.opacity = 1; // 动画结束时显示描述
        await new Promise(resolve => setTimeout(resolve, 1000)); // 停留1秒
        desc.style.opacity = 0; // 隐藏描述
    }
    alert("所有动画已完成！"); // 动画结束后提示
}
