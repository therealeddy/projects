<?php
$args = array( 
    'post_type' => 'product', 
    'posts_per_page' => 8,
);
$products = new WP_Query( $args );
?>

<?php if($products->have_posts()): ?>
    <div class="call-products">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="d-flex justify-content-between align-items-center mb-5">
                        <h2 class="title-1">
                            Promoções
                        </h2>
                        <a href="<?php bloginfo('url'); ?>/loja" class="btn-1">
                            Ver
                        </a>
                    </div>
                    <div class="owl-carousel owl-theme">
                        <?php while ( $products->have_posts() ) : $products->the_post(); ?>
                            <?php
                                $_product = wc_get_product( $products->post->ID );
                                $price = $_product->get_regular_price();
                                $sale = $_product->get_sale_price();
                                $price = explode(".", $price);
                                $sale = explode(".", $sale);
                            ?>
                                <div class="item">
                                    <a class="product-simple" href="<?php echo get_permalink( $products->post->ID ) ?>">
                                        <span class="tie">
                                            <?php
                                                echo get_the_terms( $products->post->ID, 'product_cat' )[0]->name;
                                            ?>
                                        </span>
                                        <h3 class="title-2 smaller">
                                            <?php the_title(); ?>
                                        </h3>

                                        <?php if($price[0]): ?>
                                            <div class="prices">
                                                <?php if($sale[0]): ?>
                                                    <div class="price">
                                                        de R$ <?php echo $price[0]; ?><small>,<?php if($price[1]){ echo $price[1]; }else{ echo '00'; } ?></small>
                                                    </div>
                                                    <div class="sale-price">
                                                        Por R$ <?php echo $sale[0]; ?><small>,<?php if($sale[1]){ echo $sale[1]; }else{ echo '00'; } ?></small>
                                                    </div>
                                                <?php else: ?>
                                                    <div class="sale-price">
                                                        R$ <?php echo $price[0]; ?><small>,<?php if($price[1]){ echo $price[1]; }else{ echo '00'; } ?></small>
                                                    </div>
                                                <?php endif; ?>
                                            </div>
                                        <?php endif; ?>

                                        <div class="photo">
                                            <img src="<?php echo get_the_post_thumbnail_url($products->post->ID); ?>" alt="<?php the_title(); ?>">
                                        </div>

                                        <?php if($price[0]): ?>
                                            <div class="prices-mobile">
                                                <?php if($sale[0]): ?>
                                                    <div class="price">
                                                        de R$ <?php echo $price[0]; ?><small>,<?php if($price[1]){ echo $price[1]; }else{ echo '00'; } ?></small>
                                                    </div>
                                                    <div class="sale-price">
                                                        Por R$ <?php echo $sale[0]; ?><small>,<?php if($sale[1]){ echo $sale[1]; }else{ echo '00'; } ?></small>
                                                    </div>
                                                <?php else: ?>
                                                    <div class="sale-price">
                                                        R$ <?php echo $price[0]; ?><small>,<?php if($price[1]){ echo $price[1]; }else{ echo '00'; } ?></small>
                                                    </div>
                                                <?php endif; ?>
                                            </div>
                                        <?php endif; ?>

                                        <?php if($sale[0]): ?>
                                            <div class="desconto">
                                                <strong>
                                                    <?php echo intval(100 - (($sale[0]*100)/$price[0])) ?><span>%</span>
                                                </strong>
                                            </div>
                                        <?php endif; ?>
                                    </a>
                                </div>
                        <?php endwhile; wp_reset_query(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>