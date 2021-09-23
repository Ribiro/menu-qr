<template>
  <video autoplay muted ref="video" width="100%" height="100%" controls></video>
</template>

<script>
import Hls from 'hls.js';
export default {
  name: "AdminLive",
  data(){
    return{
      show_stream: true,
    }
  },
  mounted() {
    this.play_video()
  },

  methods: {
    play_video(){
      let video = this.$refs["video"];
      if (Hls.isSupported()) {
        let hls = new Hls();
        let stream = "https://live.superqrmenu.co.ke:4183/live/" +this.$store.state.business_name+ "/hls.m3u8";
        // let stream = "https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8";
        hls.loadSource(stream);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play();
        });
      }
      else if (video.canPlayType('application/vnd.apple.mpegurl')){
        video.src = 'https://live.superqrmenu.co.ke:4183/live/' +this.$store.state.business_name+ '/hls.m3u8';
        // video.src = 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8';
        video.addEventListener('loadedmetadata', function() {
          video.play();
        });
      }
    }
  }
}
</script>

<style scoped>

</style>