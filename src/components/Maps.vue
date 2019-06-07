<template>
  <div>
      <h1>{{ msg }}</h1>
      <h1>{{ data }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Maps',
  data() {
    return {
      msg: 'Maps',
      data: null,
    }
  },
  mounted() {
    console.log('montato maps');

    const axios = require('axios');
    var utils = require('./router/utils')
    var path = utils.getFolderTree(activityId);

    axios
      .get('https://egs-activity.s3.amazonaws.com'+path+'/v2')
      // .get('https://egs-activity.s3.amazonaws.com/00000000/00000000/00000300/00000313/v2' + '/setup.json')
      .then(resp => {
      console.log(resp.data);
    });
      
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
