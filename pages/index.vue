<template>
	<div class="container-fluid">
		<div class="fade-in">
			<div class="row">
				<div class="col-sm-12 col-md-6 col-lg-4">
					<div class="card">
						<div class="card-header"> Monitoreo
							<div class="card-header-actions"><a class="card-header-action" href="#"><small class="text-muted">docs</small></a></div>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-md-4 col-sm-4">
								<div class="card">
									<div class="card-body text-center p-1">
										<div class="text-muted small text-uppercase font-weight-bold"> Temperatura </div>
										<div class="text-value-xl py-3"> {{ temperature }} </div>
										<img class="c-avatar-img1" src="img/centigrade.png">
										<label class="c-switch c-switch-label c-switch-pill c-switch-opposite-primary mt-2">
											<input class="c-switch-input" type="checkbox" checked="" v-model="switch_temperature" v-on:change="switchTemperature($event)">
											<span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
										</label>
										<div class="small"> Ventilación Auto. </div>
									</div>
								</div>
								</div>
								<!-- /.col-->
								<div class="col-md-4 col-sm-4">
								<div class="card">
									<div class="card-body text-center p-1">
										<div class="text-muted small text-uppercase font-weight-bold"> Humedad </div>
										<div class="text-value-xl py-3"> {{ humidity }} </div>
										<img class="c-avatar-img1" src="img/condensation.png">
										<label class="c-switch c-switch-label c-switch-pill c-switch-opposite-primary mt-2">
											<input class="c-switch-input" type="checkbox" checked="" v-model="switch_humidity" v-on:change="switchHumidity($event)">
											<span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
										</label>
										<div class="small"> Riego Auto. </div>
									</div>
								</div>
								</div>
								<!-- /.col-->
								<div class="col-md-42 col-sm-4">
								<div class="card">
									<div class="card-body text-center p-1">
										<div class="text-muted small text-uppercase font-weight-bold"> Nivel </div>
										<div class="text-value-xl py-3">1,123</div>
										<img class="c-avatar-img1" src="img/flood.png">
									</div>
								</div>
								</div>
								<!-- /.col-->
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-4">
					<div class="card">
						<div class="card-header"> Humedad
							<div class="card-header-actions"><a class="card-header-action"><small class="text-muted">docs</small></a></div>
							</div>
						<div class="card-body">
							<div class="" id="container_humidity"></div>
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-4">
					<div class="card">
						<div class="card-header"> Temperatura
							<div class="card-header-actions"><a class="card-header-action"><small class="text-muted">docs</small></a></div>
							</div>
						<div class="card-body">
							<div class="" id="container_temperature"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'

	import localData from "@/static/data.json";

	export default {
		name: "Index",
		components: {

		},
		data () {
			return {
				welcome: "Index",
				temperature: 18,
				t_max: 20,
				t_min: 18,
				humidity: 67,
				h_max: 65,
				h_min: 70,
				switch_temperature: true,
				switch_humidity: true
			}
		},
		methods: {
			switchTemperature(event) {
				// console.log(event.target.value);
				const aux = 3
				if (this.switch_temperature) {
					this.t_max -= aux;
					this.t_min -= aux;
				} else {
					this.t_max += aux;
					this.t_min += aux;
				}
			},
			switchHumidity(event) {
				// console.log(event.target.value);
				const aux = 2
				if (this.switch_humidity) {
					this.h_max += aux;
					this.h_min += aux;
				} else {
					this.h_max -= aux;
					this.h_min -= aux;
				}
			},
			GenerateTemperature () {
				const that = this;
				Highcharts.chart('container_temperature', {
					chart: {
						type: 'spline',
						animation: Highcharts.svg, // don't animate in old IE
						marginRight: 10,
						events: {
							load: function () {
								// set up the updating of the chart each second
								var series = this.series[0];
								setInterval(function () {
									var x = (new Date()).getTime(), // current time
										y = Math.floor(Math.random() * (that.t_max - that.t_min + 1)) + that.t_min;
									that.temperature = y;
									series.addPoint([x, y], true, true);
								}, 1000);
							}
						}
					},

					time: {
						useUTC: false
					},

					title: {
						text: ''
					},

					accessibility: {
						announceNewData: {
							enabled: true,
							minAnnounceInterval: 15000,
							announcementFormatter: function (allSeries, newSeries, newPoint) {
								if (newPoint) {
									return 'New point added. Value: ' + newPoint.y;
								}
								return false;
							}
						}
					},

					xAxis: {
						title: {
							text: 'Hora'
						},
						type: 'datetime',
						tickPixelInterval: 150
					},

					yAxis: {
						title: {
							text: 'Temperatura (C°)'
						},
						plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
						}]
					},

					tooltip: {
						headerFormat: '<b>{series.name}</b><br/>',
						pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
					},

					legend: {
						enabled: false
					},

					exporting: {
						enabled: false
					},

					series: [{
						name: 'Temperatura',
						data: (function () {
							// generate an array of random data
							let max = 20;
							let min = 18;
							var data = [],
								time = (new Date()).getTime(),
								i;

							for (i = -19; i <= 0; i += 1) {
								data.push({
									x: time + i * 1000,
									y: Math.floor(Math.random() * (max - min + 1)) + min
								});
							}
							return data;
						}())
					}]
				});
			},
			GenerateHumidity () {
				const that = this;
				Highcharts.chart('container_humidity', {
					chart: {
						type: 'spline',
						animation: Highcharts.svg, // don't animate in old IE
						marginRight: 10,
						events: {
							load: function () {
								// set up the updating of the chart each second
								var series = this.series[0];
								setInterval(function () {
									var x = (new Date()).getTime(), // current time
										y = Math.floor(Math.random() * (that.h_max - that.h_min + 1)) + that.h_min;
									that.humidity = y;
									series.addPoint([x, y], true, true);
								}, 1000);
							}
						}
					},

					time: {
						useUTC: false
					},

					title: {
						text: ''
					},

					accessibility: {
						announceNewData: {
							enabled: true,
							minAnnounceInterval: 15000,
							announcementFormatter: function (allSeries, newSeries, newPoint) {
								if (newPoint) {
									return 'New point added. Value: ' + newPoint.y;
								}
								return false;
							}
						}
					},

					xAxis: {
						title: {
							text: 'Hora'
						},
						type: 'datetime',
						tickPixelInterval: 150
					},

					yAxis: {
						title: {
							text: 'Humedad (%)'
						},
						plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
						}]
					},

					tooltip: {
						headerFormat: '<b>{series.name}</b><br/>',
						pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
					},

					legend: {
						enabled: false
					},

					exporting: {
						enabled: false
					},

					series: [{
						name: 'Humedad',
						data: (function () {
							// generate an array of random data
							let max = 70;
							let min = 65;
							var data = [],
								time = (new Date()).getTime(),
								i;

							for (i = -19; i <= 0; i += 1) {
								data.push({
									x: time + i * 1000,
									y: Math.floor(Math.random() * (max - min + 1)) + min
								});
							}
							return data;
						}())
					}]
				});
			}
		},
		computed: {

		},
		filters: {

		},
		beforeCreate () {
			// console.log("1 - Index beforeCreate");
		},
		created () {
			// console.log("2 - Index created");
		},
		beforeMount () {
			// console.log("3 - Index beforeMount");
		},
		mounted () {
			console.log("4 - Index mounted");

			this.GenerateTemperature();
			this.GenerateHumidity();
		},
		beforeUpdate () {
			// console.log("5 - Index beforeUpdate");
		},
		updated () {
			// console.log("6 - Index updated");
		},
		beforeDestroy () {
			// console.log("7 - Index beforeDestroy");
		},
		destroyed () {
			// console.log("8 - Index destroyed");
		}
	}
</script>

<style>

</style>
