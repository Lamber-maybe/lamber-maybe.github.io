// Asciinema Player 初始化脚本
document.addEventListener('DOMContentLoaded', function() {
  // 等待asciinema player脚本加载完成
  function initAsciinemaPlayers() {
    if (typeof AsciinemaPlayer === 'undefined') {
      // 如果脚本还没加载，等待100ms后重试
      setTimeout(initAsciinemaPlayers, 100);
      return;
    }

    // 查找所有asciinema播放器容器
    const players = document.querySelectorAll('.asciinema-player');
    
    players.forEach(function(player) {
      // 获取配置参数
      const castFile = player.getAttribute('data-cast-file');
      const theme = player.getAttribute('data-theme') || 'asciinema';
      const speed = parseFloat(player.getAttribute('data-speed')) || 1;
      const autoplay = player.getAttribute('data-autoplay') === 'true';
      const loop = player.getAttribute('data-loop') === 'true';
      const fontSize = player.getAttribute('data-font-size') || '15px';
      const lineHeight = parseFloat(player.getAttribute('data-line-height')) || 1.33333334;
      const startAt = player.getAttribute('data-start-at');
      const poster = player.getAttribute('data-poster');
      const markersData = player.getAttribute('data-markers');

      // 构建播放器配置
      const playerConfig = {
        theme: theme,
        speed: speed,
        autoplay: autoplay,
        loop: loop,
        fontSize: fontSize,
        lineHeight: lineHeight,
        controls: true  // 始终显示控制栏
      };

      // 添加可选参数
      if (startAt) {
        playerConfig.startAt = startAt;
      }
      if (poster) {
        playerConfig.poster = poster;
      }
             if (markersData) {
         try {
           const markers = JSON.parse(markersData);
           // 确保markers是数组格式
           if (Array.isArray(markers)) {
             playerConfig.markers = markers;
           }
         } catch (e) {
           console.error('Invalid markers data:', markersData, e);
         }
       }

      // 创建播放器
      try {
        AsciinemaPlayer.create(castFile, player, playerConfig);
      } catch (error) {
        console.error('Failed to create asciinema player:', error);
      }
    });
  }

  // 开始初始化
  initAsciinemaPlayers();
});
