<template>
	<div>
		<!-- <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar"> -->
		<div class="c-sidebar c-sidebar-dark c-sidebar-fixed" id="sidebar">	
			<div class="c-sidebar-brand d-lg-down-none">
				<svg class="c-sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
					<use xlink:href="assets/brand/coreui.svg#full"></use>
				</svg>
				<svg class="c-sidebar-brand-minimized" width="46" height="46" alt="CoreUI Logo">
					<use xlink:href="assets/brand/coreui.svg#signet"></use>
				</svg>
			</div>
			<ul class="c-sidebar-nav">
				<li class="c-sidebar-nav-item">
					<nuxt-link to="/" class="c-sidebar-nav-link">
						<svg class="c-sidebar-nav-icon">
							<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
						</svg> Monitoreo <span class="badge badge-danger"> Pro </span>
					</nuxt-link>
					<!-- <a class="c-sidebar-nav-link" href="/">
						<svg class="c-sidebar-nav-icon">
							<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
						</svg> Monitoreo <span class="badge badge-danger"> Perú </span>
					</a> -->
				</li>
				<!-- <li class="c-sidebar-nav-title">Mundo</li>
				<li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="colors.html">
					<svg class="c-sidebar-nav-icon">
						<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-drop1"></use>
					</svg> Colors</a>
				</li>
				<li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="typography.html">
					<svg class="c-sidebar-nav-icon">
						<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-pencil"></use>
					</svg> Typography</a>
				</li> -->
				<!-- <li class="c-sidebar-nav-title">Perú</li>
				<li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="charts.html">
					<svg class="c-sidebar-nav-icon">
						<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-chart-pie"></use>
					</svg> Monitoreo </a>
				</li> -->
			</ul>
			<button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
		</div>
		<div class="c-wrapper c-fixed-components">
			<header class="c-header c-header-light c-header-fixed c-header-with-subheader">
				<button class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar" data-class="c-sidebar-show">
					<svg class="c-icon c-icon-lg">
						<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
					</svg>
				</button>
				<a class="c-header-brand d-lg-none" href="#">
					<svg width="118" height="46" alt="CoreUI Logo">
						<use xlink:href="assets/brand/coreui.svg#full"></use>
					</svg>
				</a>
				<button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
					<svg class="c-icon c-icon-lg">
						<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
					</svg>
				</button>
				<ul class="c-header-nav d-md-down-none">
					<li class="c-header-nav-item px-3"><a class="c-header-nav-link text-info font-weight-bold" href="#"> SISTEMA DE MONITOREO Y CONTROL </a></li>
					<!-- <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#"> Perú </a></li>
					<li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#"> Cusco </a></li> -->
				</ul>
				<ul class="c-header-nav ml-auto mr-4">
					<!-- <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
						<svg class="c-icon">
							<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
						</svg></a></li>
					<li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
						<svg class="c-icon">
							<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-list-rich"></use>
						</svg></a></li>
					<li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
						<svg class="c-icon">
							<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
						</svg></a></li> -->
					<li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
						{{ datetime_now }}
						</a>
					</li>
					<li class="c-header-nav-item dropdown">
						<a class="c-header-nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
							<div class="c-avatar"><img class="c-avatar-img" src="img/weather.png" alt="user@email.com"></div>
						</a>
						<!-- <div class="dropdown-menu dropdown-menu-right pt-0">
							<div class="dropdown-header bg-light py-2"><strong>Account</strong></div><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
							</svg> Updates<span class="badge badge-info ml-auto">42</span></a><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
							</svg> Messages<span class="badge badge-success ml-auto">42</span></a><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-task"></use>
							</svg> Tasks<span class="badge badge-danger ml-auto">42</span></a><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-comment-square"></use>
							</svg> Comments<span class="badge badge-warning ml-auto">42</span></a>
							<div class="dropdown-header bg-light py-2"><strong>Settings</strong></div><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
							</svg> Profile</a><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-settings"></use>
							</svg> Settings</a><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-credit-card"></use>
							</svg> Payments<span class="badge badge-secondary ml-auto">42</span></a><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-file"></use>
							</svg> Projects<span class="badge badge-primary ml-auto">42</span></a>
							<div class="dropdown-divider"></div><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
							</svg> Lock Account</a><a class="dropdown-item" href="#">
							<svg class="c-icon mr-2">
							  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
							</svg> Logout</a>
						</div> -->
					</li>
				</ul>
				<!-- <div class="c-subheader px-3">
					<ol class="breadcrumb border-0 m-0">
						<li class="breadcrumb-item"> Monitoreo diario - Última actualización {{ date }} </li>
						<!- - <li class="breadcrumb-item"> Inicio </li>
						<li class="breadcrumb-item"><a href="#"> Monitoreo </a></li>
						<li class="breadcrumb-item active"> Dashboard </li> - ->
					</ol>
				</div> -->
			</header>
			<div class="c-body">
				<main class="c-main">
					<nuxt />
				</main>
				<footer class="c-footer">
					<div><a href="#">Go</a> © 2021 creativeLabs.</div>
					<div class="ml-auto">Powered by&nbsp;<a href="#">win7</a></div>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
	import localData from "@/static/data.json";
	import moment from "moment";

	export default {
		name: "Default",
		head: {
			bodyAttrs: {
				class: "c-app"
			},
			title: "monitoring"
		},
		components: {
			
		},
		data () {
			return {
				welcome: "Default",
				datetime_now: moment(new Date).format('DD-MMn-YYYY, HH:mm:ss'),
			}
		},
		methods: {
			showClock () {
				setInterval( () => {
					this.datetime_now = moment(new Date).format('DD-MM-YYYY, HH:mm:ss')
				}, 1000);
			}			
		},
		computed: {
		},
		beforeCreate () {
			console.log("1 - Default beforeCreate");
		},
		created () {
			console.log("2 - Default created");
		},
		beforeMount () {
			console.log("3 - Default beforeMount");
		},
		mounted () {
			console.log("4 - Default mounted");
			this.showClock();
		},
		beforeUpdate () {
			console.log("5 - Default beforeUpdate");
		},
		updated () {
			console.log("6 - Default updated");
		},
		beforeDestroy () {
			console.log("7 - Default beforeDestroy");
		},
		destroyed () {
			console.log("8 - Default destroyed");
		}
	}
</script>

<style>
	.c-sidebar .c-sidebar-nav-link:hover, .c-sidebar .c-sidebar-nav-dropdown-toggle:hover {
		color: #fff;
		background: #3399ff;
	}

	.c-sidebar.c-sidebar-minimized .c-sidebar-nav-item:hover > .c-sidebar-nav-link {
		background: #321fdb;
	}

	.class-tooltip {
		/* background: green; */
		/* border: 2px solid cyan; */
		font-weight: bold;
		padding: 0px;
	}

	.class-popup {
		/* background: green; */
		/* border: 2px solid cyan; */
		font-weight: bold;
	}
	
	.card {
	    margin-bottom: 0.5rem;
	}
</style>