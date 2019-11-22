<section id="contact">
    <div class="container d-flex h-100 align-items-center flex-column justify-content-center">
        <div class="row w-100">
            <div class="col-3">
                <div class="icon-calendar"><i class="icon ion-ios-send"></i></div>
            </div>
            <div class="col-9">
                <h2 class="title_section">Contato</h2>
            </div>
        </div>

        <div class="justify-content-lg-end row w-100">
            <div class="col-md-4 col-lg-3 contact_text">
                <div class="content">
                    <div itemscope itemtype="http://schema.org/Organization">
                        <address itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
                            <h2 class="subtitle_contact"><span itemprop="streetAddress"><?php the_field('titulo_contact', 'option'); ?></span></h2>
                        </address>
                        <p class="info"><?php the_field('endereco', 'option'); ?></p>
                        <p class="info"><span itemprop="telephone"><?php the_field('telefone', 'option'); ?></span></p>
                    </div>
                    <?php if(get_field('foto_contact', 'option')): ?>
                    <div class="contact-image">
                        <img src="<?php the_field('foto_contact', 'option'); ?>" alt="foto_contact">
                    </div>
                    <?php endif; ?>
                </div>
            </div>


            <div class="col-md-7 d-flex align-items-center justify-content-center">
                <div class="border_contact">

                    <span class="gradient-border">
                        <i class="border-01"></i>
                        <i class="border-02"></i>
                        <i class="border-03"></i>
                        <i class="border-04"></i>
                    </span>

                    <?php echo do_shortcode('[gravityform id=1]'); ?>

                </div>
            </div>
        </div>
    </div>
</section>