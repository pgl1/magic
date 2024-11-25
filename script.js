// 添加输入监听
document.getElementById('name').addEventListener('input', function() {
    document.getElementById('displayName').textContent = this.value;
});

function goToWishes() {
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        alert('请输入寿星的名字！');
        return;
    }
    // 将名字存储在 URL 参数中，跳转到祝福页面
    window.location.href = `wishes.html?name=${encodeURIComponent(name)}`;
} 