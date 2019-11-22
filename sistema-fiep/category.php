<?php 
get_header();
$args = array(
  'post_type'       => 'cursos',
  'posts_per_page'  => -1,
  'cat'             => get_queried_object()->term_id
);
$cat_posts = new WP_Query($args);
$exibicao = get_field('tipo_de_exibicao_de_cursos');
?>

<div class="category-template">
  <div class="container">
    <div class="row mb-5 pb-5">
      <div class="col-lg-5 offset-lg-2 mb-4">
        <div class="area-title">
          <a href="<?php bloginfo('url'); ?>/modalidades" class="back-seta"></a>
          <h1><?php single_cat_title(); ?></h1>
        </div>
      </div>
      <div class="col-lg-8 offset-lg-2 description-cat">
        <h2 class="title-2 mb-4"><?php the_field('subtitulo'); ?></h2>
        <?php echo category_description(); ?>
      </div>
    </div>
    <?php if($cat_posts->have_posts()): ?>

      <?php if($exibicao == 'Pequeno, sem descrição'): ?>
        <div class="row cursos mini">
          <?php while($cat_posts->have_posts()): $cat_posts->the_post(); ?>
          <div class="col-lg-4 mb-4 pb-1">
            <div class="curso-single">
              <a class="image-curso" href="<?php the_field('link') ?>" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
                <div class="content">
                  <div class="title-curso">
                    <?php the_title(); ?>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <?php endwhile; ?>
        </div>
      <?php endif; ?>

      <?php if($exibicao == 'Grande, com descrição'): ?>
        <div class="row cursos big">
          <?php while($cat_posts->have_posts()): $cat_posts->the_post(); ?>
          <div class="col-lg-6 mb-4 pb-1">
            <div class="curso-single">
              <a class="image-curso" href="<?php the_field('link') ?>" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
                <div class="content">
                  <div class="title-curso">
                    <?php the_title(); ?>
                  </div>
                  <p>
                    <?php echo wp_trim_words(get_the_excerpt(), 40, '...'); ?>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <?php endwhile; ?>
        </div>
      <?php endif; ?>

      <?php if($exibicao == 'Médio, com descrição'): ?>
        <div class="row cursos medium">
          <?php while($cat_posts->have_posts()): $cat_posts->the_post(); ?>
          <div class="col-lg-4 mb-4 pb-1">
            <div class="curso-single">
              <a class="image-curso" href="<?php the_field('link') ?>" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
              </a>
              <div class="content-exit">
                <div class="title-curso">
                  <?php the_title(); ?>
                </div>
                <p>
                  <?php echo get_the_excerpt(); ?>
                </p>
              </div>
            </div>
          </div>
          <?php endwhile; ?>
        </div>
      <?php endif; ?>

    <?php endif; ?>
  </div>
</div>

<div class="separator-category d-flex align-items-center">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 d-flex justify-content-between align-items-center flex-lg-row flex-column">
        <div class="title-2">
        Quer conhecer todos os <br>
        nossos cursos?
        </div>
        <a href="<?php the_field('link_conhecer', 'option'); ?>" class="btn-single">Clique Aqui</a>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>