<?php get_header(); ?>

<?php get_header('unidade'); ?>

<div class="banner-unidade" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>')">
    <div class="container d-flex flex-column align-items-center justify-content-center h-100 content-unidade">
        <h2 class="cat">
            <?php _e('Loja', 'mentores'); ?>
        </h2>
        <h1 class="title-1">
            <? the_title(); ?>
        </h1>
        <?php if(get_field('link_mapa_botao')): ?>
            <a href="<?php the_field('link_mapa_botao') ?>" target="_blank" class="btn-3">
                <?php _e('Abrir no Google Maps', 'mentores'); ?>
            </a>
        <?php endif; ?>
    </div>
</div>

<div class="destaques">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-5">
                        <div class="item-single h-100">
                            <div>
                                <img src="<?php the_field('icone_endereco'); ?>" alt="icon-endereco" class="icon-item">
                            </div>
                            <div class="text">
                                <p class="title-1 smaller mb-3">
                                    <?php _e('Endereço', 'mentores'); ?>
                                </p>
                                <p>
                                    <?php the_field('rua_com_numero'); ?> <br>
                                    <?php the_field('cidade'); ?> <br>
                                    <?php _e('CEP', 'mentores'); ?> - <?php the_field('cep'); ?>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5">
                        <div class="item-single h-100">
                            <div>
                                <img src="<?php the_field('icone_contato'); ?>" alt="icon-contato" class="icon-item">
                            </div>
                            <div class="text">
                                <p class="title-1 smaller mb-3">
                                    <?php _e('Contato', 'mentores'); ?>
                                </p>
                                <p>
                                    <?php if(get_field('whatsapp')): ?>
                                        <span class="whats-number">
                                            <img src="<?php bloginfo('template_directory'); ?>/assets/images/whats-icon.png" alt="whats-icon" height="20" class="mr-2" /><a href="https://api.whatsapp.com/send?phone=<?php the_field('whatsapp'); ?>" target="_blank"><?php the_field('whatsapp'); ?></a>
                                        </span>
                                    <?php endif; ?>
                                    <?php if(get_field('telefone')): ?>
                                        <?php _e('Telefone', 'mentores'); ?> - <?php the_field('telefone'); ?> <br>
                                    <?php endif; ?>
                                    <?php if(get_field('e-mail')): ?>
                                        <?php _e('E-mail', 'mentores'); ?> - <?php the_field('e-mail'); ?>
                                    <?php endif; ?>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5">
                        <div class="item-single h-100">
                            <div>
                                <img src="<?php the_field('icone_horario'); ?>" alt="icon-horario" class="icon-item">
                            </div>
                            <div class="text">
                                <p class="title-1 smaller mb-3">
                                    <?php _e('Horário de funcionamento', 'mentores'); ?>
                                </p>
                                <p>
                                    <?php if(get_field('segunda_a_sexta')): ?>
                                        <?php _e('Segunda a Sexta', 'mentores'); ?> - <?php the_field('segunda_a_sexta'); ?> <br>
                                    <?php endif; ?>
                                    <?php if(get_field('sabado')): ?>
                                        <?php _e('Sábado', 'mentores'); ?> - <?php the_field('sabado'); ?> <br>
                                    <?php endif; ?>
                                    <?php if(get_field('domingo')): ?>
                                        <?php echo ( ! empty( get_field('domingo_label') )) ? get_field('domingo_label') : _e('Domingo e feriados', 'mentores'); ?> - <?php the_field('domingo'); ?>
                                    <?php endif; ?>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>

<?php if(get_field('titulo') || get_field('descricao')): ?>
    <div class="container mb-5 pb-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <p class="title-1 smaller">
                            <?php the_field('titulo'); ?>
                        </p>
                    </div>
                    <div class="col-md-8">
                        <p>
                            <?php the_field('descricao'); ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>
<div class="mapa-unidade">
    <div class="container mb-5 pb-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <?php the_field('mapa'); ?>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>