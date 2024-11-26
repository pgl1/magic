document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = decodeURIComponent(urlParams.get('name'));
    
    createFloatingLights();
    
    const creatures = document.querySelectorAll('.creature');
    creatures.forEach((creature, index) => {
        creature.style.opacity = '0';
        creature.style.transform = 'translateY(50px)';
        setTimeout(() => {
            creature.style.transition = 'all 1s ease';
            creature.style.opacity = '1';
            creature.style.transform = 'translateY(0)';
        }, 500 + index * 300);
    });
});

function createFloatingLights() {
    const container = document.querySelector('.floating-lights');
    for(let i = 0; i < 50; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        light.style.left = `${Math.random() * 100}%`;
        light.style.top = `${Math.random() * 100}%`;
        light.style.animationDuration = `${Math.random() * 3 + 2}s`;
        light.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(light);
    }
}

// 生物详细信息数据
const creaturesData = {
    phoenix: {
        name: "不死鸟",
        image: "./images/不死鸟.png",
        description: "不死鸟是一种神奇的魔法生物，能够浴火重生。当它年老时，会在火焰中化为灰烬，然后从灰烬中重生为一只幼鸟。",
        abilities: [
            "浴火重生：能够从灰烬中重获新生",
            "治愈之泪：泪水具有强大的治愈能力",
            "歌声魔法：歌声能给人勇气和力量",
            "超强负重：能够承载极重的物体"
        ]
    },
    unicorn: {
        name: "独角兽",
        image: "./images/独角兽.png",
        description: "独角兽是最纯洁的魔法生物之一，它们通常栖息在森林深处。独角兽的角具有强大的魔法力量，能净化一切邪恶。",
        abilities: [
            "净化魔法：角具有净化能力",
            "月光祝福：在月光下获得额外力量",
            "治愈光环：散发治愈周围生物的光环",
            "穿越空间：能够穿越空间屏障"
        ]
    },
    dragon: {
        name: "巨龙",
        image: "./images/巨龙.png",
        description: "巨龙是最古老和最强大的魔法生物之一。它们不仅拥有强大的物理力量，还具备高度的智慧和魔法能力。",
        abilities: [
            "龙息：可以喷射强大的魔法吐息",
            "魔法抗性：对各种魔法具有极强抗性",
            "飞行：能够在高空自如飞行",
            "元素掌控：能够操控特定元素"
        ]
    }
};

function showDetail(creatureType) {
    const modal = document.getElementById('detailModal');
    const creature = creaturesData[creatureType];
    
    // 更新模态框内容
    modal.querySelector('.detail-image').style.backgroundImage = `url(${creature.image})`;
    modal.querySelector('h2').textContent = creature.name;
    modal.querySelector('.description').textContent = creature.description;
    
    // 更新能力列表
    const abilitiesContainer = modal.querySelector('.magic-abilities');
    abilitiesContainer.innerHTML = '<h3>魔法能力：</h3>' + 
        creature.abilities.map(ability => `<div class="ability">${ability}</div>`).join('');
    
    // 显示模态框
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeDetail() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

// 点击模态框外部关闭
document.getElementById('detailModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeDetail();
    }
}); 