<template>
   <div class="col-md-12 content-margin-top" v-show="show">
    <div class="row">
      <div class="timeline timeline-line-dotted">
        <div v-for="(item,index) in roadMap" :key="index" class="timeline-item" :class="{'timeline-text-algin':index%2 == 0}">
          <div class="timeline-point"><i :class="{'active':item.active}"></i></div>
          <div class="timeline-event">
            <div class="timeline-heading">
              <h4  :class="{'blue':item.active}">{{$t(('index.roadMap.'+item.name)).year}}</h4>
            </div>
            <div class="timeline-body">
              <p>{{$t(('index.roadMap.'+item.name)).event}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/timeline.css";
export default {
  data() {
    return {
      timer: null,
      show: false
    };
  },
  props: {
    roadMap: {
      type: Array,
      required: true
    }
  },
  created() {
    this.timer = setTimeout(() => {
      this.show = true;
    }, 300);
  }
};
</script>

  

