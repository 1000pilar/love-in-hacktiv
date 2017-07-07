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
  <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
      <span>BootstrapVue</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item>Support</b-nav-item>
        <b-nav-item>Docs</b-nav-item>
        <b-nav-item>Contact Us</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item to="#">EN</b-dropdown-item>
          <b-dropdown-item to="#">ES</b-dropdown-item>
          <b-dropdown-item to="#">RU</b-dropdown-item>
          <b-dropdown-item to="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>

          <!-- Using button-content slot -->
          <template slot="button-content">
            <span style="font-weight: bold;">User</span>
          </template>

          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
</b-navbar>`,
  data() {
    return {
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
})

Vue.component('side-bar', {
  props: [''],
  template: `
  <div>
    <p>
    <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
    </p>

    <b-collapse id="collapse1">
    <b-card>
        Collapse contents Here
        <b-btn v-b-toggle.collapse2 size="sm">Toggle Inner Collapse</b-btn>
        <b-collapse id=collapse2 class="mt-2">
        <b-card>Hello!</b-card>
        </b-collapse>
    </b-card>
    </b-collapse>
  </div>`,
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
