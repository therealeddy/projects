<?php
$events_query = new WP_Query(array(
    'post_type'	=> 'eventos',
    'posts_per_page'	=> -1,
	'meta_key'			=> 'data_back',
	'orderby'			=> 'meta_value',
	'order'				=> 'ASC'
));
?>


<?php if($events_query): ?>
    <section id="calendar">
        <div class="filter"></div>

        <div class="container d-flex flex-column align-items-center justify-content-center">
            <div class="row w-100">
                <div class="col-3">
                    <div class="icon-calendar"><i class="icon ion-ios-calendar"></i></div>
                </div>
                <div class="col-9">
                    <h2 class="title_section">Calendário</h2>
                </div>
            </div>
            <?php while ( $events_query->have_posts() ): $events_query->the_post(); ?>
                <?php 
                $data = explode("/", get_field('data'));
                ; ?>
                <div class="row calendar-item w-100">
                    <div class="col-3">
                        <div class="img-calendar">
                            <span class="gradient-border">
                                <i class="border-01"></i>
                                <i class="border-04"></i>
                            </span>
                            <div class="data">
                                <span class="day"><?php echo $data[0]; ?></span>
                                <strong class="month"><?php echo $data[1]; ?></strong>
                            </div>
                            <?php the_post_thumbnail('thumbnail'); ?>
                        </div>
                    </div>
                    <div class="col-9 d-flex justify-content-start">
                        <div class="box_content">
                            <h3 class="title_1"><?php the_title(); ?></h3>
                            <h4 class="title_2"><?php the_field('local'); ?></h4>
                            <p class="info"><?php the_field('descricao'); ?></p>
                        </div>
                    </div>
                </div>

            <?php endwhile; ?>
            
        </div>
    </section>
<?php endif; ?>