//
// Vue.component('love-headers', {
//   props: [''],
//   template: `
//     <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
//       <el-menu-item index="1">Processing Center</el-menu-item>
//       <el-submenu index="2">
//         <template slot="title">Workspace</template>
//         <el-menu-item index="2-1">item one</el-menu-item>
//         <el-menu-item index="2-2">item two</el-menu-item>
//         <el-menu-item index="2-3">item three</el-menu-item>
//       </el-submenu>
//       <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
//       </el-menu>
//       <div class="line"></div>
//       <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
//       <el-menu-item index="1">Processing Center</el-menu-item>
//       <el-submenu index="2">
//         <template slot="title">Workspace</template>
//         <el-menu-item index="2-1">item one</el-menu-item>
//         <el-menu-item index="2-2">item two</el-menu-item>
//         <el-menu-item index="2-3">item three</el-menu-item>
//       </el-submenu>
//       <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
//     </el-menu>
//   `,
//   methods: {
//
//   }
// })

Vue.component('love-headers', {
  props: [''],
  template: `
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
  </el-menu>`,
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
})

Vue.component('side-bar-footers', {
  props: [''],
  template: `

  `,
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
})


Vue.component('love-footers', {
  props: [''],
  template: `

  `,
  methods: {

  }
})
