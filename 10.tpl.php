<!-- ё -->
<div class="slider-site slider-diy">
	<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
		<div class="carousel-inner">
			<div class="item ">
				<img src="<?php echo $this->path('img');?>/tpl/diy-slider-item1.jpg" alt="">	
			</div>
			<div class="item ">
				<img src="<?php echo $this->path('img');?>/tpl/diy-slider-item2.jpg" alt="">	
			</div>
			<div class="item ">
				<img src="<?php echo $this->path('img');?>/tpl/diy-slider-item3.jpg" alt="">	
			</div>
		</div>
	
		<div class="slider-flex">
			<div class="container">
				<div class="row">
					<div class="col-md-5">
						<div class="slider-captions">
							<div class="slider-captions__heading">DIY</div>
							<div class="slider-captions__body">
								Endurance DIY mini diode laser engraving/cutting machine
								<div>&nbsp;</div>
								<div class="slider-captions__cost"><span>$395</span> with a 2.1W laser</div>
								<div class="slider-captions__cost"><span>$495</span> with a 3.5W laser</div> 
								<div>&nbsp;</div> 
								<div><a href="<? the_field('buy-link', $this->post['id']);?>" class="btn-blue slider-captions__btn">Buy now</a></div> 
							</div>
							<ol class="carousel-indicators">
								<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
								<li data-target="#carousel-example-generic" data-slide-to="1"></li>
								<li data-target="#carousel-example-generic" data-slide-to="2"></li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</div>
</div> 

<?php if(function_exists('show_text_block') && get_field('show-podcast', 1)) { echo show_text_block('podcasts-live', true); } ?>

		<main class="content-block">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="products-page">
	<h1 class="heading-block">About product</h1>
	<div class="row">
		<div class="col-md-6">
			<div>Endurance DIY desktop diode laser engraving/cutting machine. This Endurance DIY engraving/cutting machine is equipped with a powerful blue diode laser with a wave length of 445 nm and power of either 2100mW (2.1 Watt) or 3500mW (3.5 Watt). The tool is very easy to use and operate. Just connect it to the computer and engrave or cut whatever you wish.</div>
			<div>&nbsp;</div>
			<div>The Endurance DIY engraver/cutter engraves and cuts various materials including PLA, ABS, wood, plywood, leather, non-transparent acrylic. This DIY laser engraving/cutting machine will become useful at home or office.</div>
			<div>&nbsp;</div>
			<div class="blue">It cuts and engraves:</div>
			<div class="list-flex">
				<ul>
					<li>wood</li>
					<li>acrylic</li>
					<li>PLA</li>
				</ul>
				<ul>
					<li>ABS</li>
					<li>felt</li>
					<li>fabric</li>
				</ul>
				<ul>
					<li>paper</li>
					<li>cardboard</li>
					<li>hardboard</li>
				</ul>

				<div><a href="http://Robots-everywhere.com/" style="color: #666;" target="_blank">Robots Everywhere production</a></div>
			</div>
		</div>
		<div class="col-md-6">
			<h3>Technical Specs:</h3>
			<div class="products-page__technical">
				<div><b>Color:</b></div>
				<div>Silver + Transparent</div>
				<div><b>Material:</b></div>
				<div>Stainless steel + Acrylic</div>
				<div><b>Dimensions:</b></div>
				<div>12.2 in x 9.84 in x 5.91 in (31 cm x 25 cm x 15 cm)</div>
				<div><b>Weight:</b></div>
				<div>74.07 oz (2100 g)</div>
				<div><b>Package List:</b></div>
				<div>
					<ul>
						<li>1 x 2100mW / 3500mW Endurance L-Cheapo diode 			Laser Engraving Machine</li>
						<li>1 x Power adapter (about 135 cm)</li>
						<li>1 x Power cord (about 131cm)</li>
						<li>1 x USB flash drive (1GB with Driver Software / Design Software/Sample)</li>
					</ul>
				</div>
				<div><b>Working Voltage:</b> DC 12V</div>
				<div><b>Laser Output Power:</b> 2100mW / 3500mW</div>
				<div><b>Engraving and cutting accuracy:</b> 0.01mm</div>
				<div><b>Engraving and cutting area: </b>17 x 20cm / 6.69”x 7.87”(max.)</div>
			</div>
		</div>
	</div>
</div> 						
					</div>					
				</div>
			</div>			
		</main>			
		<div class="video-products-block">	
	<video autoplay loop muted> 
		<source src="<?php echo $this->path('video');?>/diy.mp4" type="video/mp4">
		<source src="<?php echo $this->path('video');?>/diy.webm" type="video/webm">
	</video>
	<div class="fadein-video">
		<div class="play-btn"><span class="glyphicon glyphicon-play"></span></div></div>
	<div class="video-products-block__caption">	
		<div class="container">
			<div class="row">
				<div class="col-md-6">		
					<h3 class="heading-block">Operation</h3>
					<div>No installation process is required. Just run gcode for 3D printing or engraving/cutting.</div>
					<div>&nbsp;</div>
					<div>Can be used as a 3D printer and a laser engraving and cutting machine. Put a piece you want to cut or engrave onto a worktop. Convert a  *.jpeg image it into a vector one and then into gcode. Run engraving. Enjoy the process.</div>
				</div>
			</div>
		</div>	
	</div>	
</div>






<div class="description-block">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="heading-block">&nbsp;</div>
				<? the_content();?>
			</div>
		</div>
	</div>
</div>




		<div class="content-block">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="video-block video__second-page">
	<div class="heading-pos">
		<div class="video-block__heading heading-block">Videos</div>
		<!--
		<a href="#" class="btn-blue video-block__btn">
			more videos
		</a>
		-->
	</div>
	<div class="row">
		<div class="col-md-6 video-block__item">
			<iframe src="https://www.youtube.com/embed/ajU8XB5SnYE" frameborder="0" allowfullscreen></iframe>
		</div>
		<div class="col-md-6 video-block__item">
			<iframe src="https://www.youtube.com/embed/j1_itpuYNkE" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6 video-block__item">
			<iframe src="https://www.youtube.com/embed/KitMoMl_EFY" frameborder="0" allowfullscreen></iframe>
		</div>
		<div class="col-md-6 video-block__item">

		</div>
	</div>
</div> 						
					</div>					
				</div>
			</div>			
		</div>






		<div class="advantages-page">
			<div class="container">
				<div class="row">
					<div class="col-md-12">					
						<div class="advantages-block">
	<div class="advantages-block__heading">Why Endurance is great team</div>
	<div class="advantages-block__flex">
		<div class="advantages-block__item">
			<div><img src="<?php echo $this->path('img');?>/tpl/adv-item1.svg" alt=""></div>
			<div>1121 people bought<br> Endurance products</div>
		</div>
		<div class="advantages-block__item">
			<div><img src="<?php echo $this->path('img');?>/tpl/adv-item2.svg" alt=""></div>
			<div>Working<br>worldwide</div>
		</div>
		<div class="advantages-block__item">
			<div><img src="<?php echo $this->path('img');?>/tpl/adv-item3.svg" alt=""></div>
			<div>High-End <br>technology</div>
		</div>
		<div class="advantages-block__item">
			<div><img src="<?php echo $this->path('img');?>/tpl/adv-item4.svg" alt=""></div>
			<div>Great<br>economy saver</div>
		</div>							
	</div>
	<div class="advantages-block__note">
		<p>Endurance has a most driven and focused team you have ever seen.</p>
		<p>Endurance was established on the 11-th of January 2015 by the bright Russian entrepreneur George I Fomitchev and the brilliant electrical engineer, NASA contractor Matteo Borri. More than 20 people workwith us on full-time and part-time basis.</p>
	</div>
</div> 
					</div>
				</div>
			</div>			
		</div>