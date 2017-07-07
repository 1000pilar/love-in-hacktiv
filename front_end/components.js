Vue.component('love-headers', {
  props: [''],
  template: `
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a v-if="!name">Please login</a></li>
        <li><a v-if="name">Welcome {{name}}</a></li>
      </ul>
    </div>
  </nav>`,
  data() {
    return {
      name: ''
    }
  },
  methods: {
    getName: function(){
      this.name = window.localStorage.getItem('name')
      console.log('ini ada di header',this.name);
    }
  },
  created: function () {
    this.getName()
  }
})

Vue.component('side-bar', {
  props: ['loves'],
  template: `
  <ul class="collapsible" data-collapsible="accordion" v-if="loves.length > 0">
  <li v-for="lovehistory in loves">
    <div class="collapsible-header">{{lovehistory.lover_name}} chance {{lovehistory.percentage}}%</div>
    <div class="collapsible-body">
    <p>candidate: {{lovehistory.love_name}}</p><br>
    <p>advice: {{lovehistory.result}}</p><br>
    <p></p><br>
    </div>
  </li>
</ul>`,
  methods: {

  },
  created (){
    console.log('ini test',this.loves)
  }
})

Vue.component('love-result', {
  props: ['results'],
  template : `
  <div v-for="result in results">
    <div v-if="result.percentage > 60" >
      <img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="250" src="https://qph.ec.quoracdn.net/main-thumb-t-1800-200-lOn8kKfhqfcTcKdt2GwaLfGnC0jEjHmV.jpeg">
      <h5> Result : </h5>
    </div>
    <div v-if="result.percentage < 60" >
      <img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="250" src="https://cdn.pixabay.com/photo/2016/02/18/15/39/broken-heart-1207380_960_720.png">
      <h5> Result : </h5>
    </div>

  </div>
  `,
  methods : {
    handleSelect (key,keyPath){
      console.log(key,keyPath);
    }
  }
})
