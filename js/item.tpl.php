<?

$query = new WP_Query(array(
	'post_type' => 'page',
	'post_parent' => 9,

	'orderby' => 'menu_order title',
	'order'   => 'ASC',
));

/*
while ($query->have_posts()) {
	$query->the_post( );
	$id = get_the_ID();
	
	the_title();
	
	if($id == $this->post['id']) {
		// активная страница
	}
	
	?>
	<img src="<?=$this->Imgs->postImg($id, 'full');?>" />
	<?
	echo get_field('start_paid', $id);
	echo get_field('percent_paid', $id);
	echo get_field('period_paid', $id);
	
	the_content();
}
*/



?>


<div id="default-url-history-container" class="page-content-cont hypothec-page " data-state="active" >

	<a class="logotip" href="<?=l(1);?>">
		<img src="<?php echo $this->path('img');?>/default/logotip-175.jpg" alt="" class="img-responsive">
	</a>

	<a class="close-it" href="#close-it" ></a>
	
	<!-- <div class="bear" ></div> -->
	
	<a href="tel:+<?=phone(get_field('phone', 5483));?>" class="office-cont" >
		<div class="title" >Офис продаж</div>
		<div class="phone" ><?=get_field('phone', 5483);?></div>
	</a>
	
	<div class="content-cont top" >
		
	</div>
	<div class="content-cont left" >
		
	</div>
	<div class="content-cont right right-bg p-bottom-170" data-right-bg="default-hyp" data-state="passive" >		
		<div class="cont-header " >
			<div class="content-header p-main-left p-header-top" >
				<h1>Ипотека</h1>
			</div>
		</div>
		<div class="cont-bank-filters p-main-left" > 	
			<div class="bank-filters" >
				
				<?
				while ($query->have_posts()) {
					$query->the_post();
					$id = get_the_ID();
				?>
				
				<div>
					<a href="<?=l($id);?>" class="bttn hypothec-switcher-btn <?if($id == $this->post['id']) {echo 'active';}?> " data-flt="<?=$id;?>" >
						<span><img src="<?=$this->Imgs->postImg($id, 'full');?>" alt=""></span>
					</a>
				</div>
				
				<?
				}
				?>
				
			</div>
			
		</div>

		<div class="blue-box content-margin _hp__blue-box p-main-left">
			
			<?
			while ($query->have_posts()) {
				$query->the_post();
				$id = get_the_ID();
				?>
			
			<div class="white-text hypothec-flt-block " data-flt="<?=$id;?>" >
				<h3 class="_heading">Ипотечная программа «<?=t($id);?>»</h3>
				<div class="_cb__flex _col _flex-block">
					<div class="_cb__col">
						<div class="_title">Первоначальный взнос</div>
						<div><?=get_field('start_paid', $id);?></div>
					</div>
					<div class="_cb__col">
						<div class="_title">Ставка по кредиту</div>
						<div><?=get_field('percent_paid', $id);?></div>
					</div>
					<div class="_cb__col">
						<div class="_title">Срок кредита</div>
						<div><?=get_field('period_paid', $id);?></div>
					</div>
					<div class="_cb__col">
						<button type="button" class="btn-site btn-white-line hypothec-modal-btn ">Рассчитать <span>ипотеку</span></button>
					</div>
				</div>
			</div>
			
			<?
			}
			?>
			
			
		</div>

		<div class="content-scroll _hp__content-scroll  " data-resize-height="50" >
			
			<div id="overflow-container" class="scroll-hide" >
				<div class="overflow-container scroll-element" >
					<div class="overflowed scroll-overflow  " >					
						
						<?
						while ($query->have_posts()) {
							$query->the_post();
							$id = get_the_ID();
							?>
						
						<div class="_hp__content-scroll-inner hypothec-flt-block " data-flt="<?=$id;?>" >
							<div class="_hp__content p-main-left" > 
								<h4>Условия программы</h4>
								<? the_content();?>
							</div>
							
						</div>
						
						<?
						}
						?>
						
					</div>
				</div>
			</div>
			
			<div class="scroll-container vertical right" data-target="#overflow-container" >
				<div class="scroll-line " >
					<div class="scroll ball" ></div>
				</div>
			</div>
						
		</div>
		<div class="down-btn"></div>
		
		
	</div>
</div>

<div class="modal fade modal-site" id="modal-hyp" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>		
				<form class="b-form _azbn-ajax-form" action="<?=l(5480);?>" method="POST" >
					<h3 class="_heading">Оставьте заявку на просчет ипотеки!</h3>
					
					<input type="hidden" name="f[Прислано со страницы]" value="<?=t($this->post['id']);?>" />
					<div class="_cb__flex _col b-form__col2">
						<div class="_cb__col">
							<input type="text" name="f[Имя]" placeholder="Ваше имя" class="form-control">
						</div>
						<div class="_cb__col">
							<input type="tel" name="f[Телефон]" placeholder="Ваш телефон" class="form-control">
						</div>
					</div>
					<div>
						<textarea name="f[Тема вопроса]" placeholder="Тема вопроса" class="form-control"></textarea>
					</div>
					<div class="b-form__btn-block">
						<button type="submit" class="btn-site btn-green-dark">Отправить</button>
					</div>
				</form>		
			</div>
		</div>
	</div>
</div> 

<?
wp_reset_postdata();
