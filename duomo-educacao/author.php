<?php 

get_header();

$ID = "user_" . get_queried_object()->data->ID;
$id_current_user = get_queried_object()->data->ID;

$args = array(
  'posts_per_page'  => 3,
  'author' => get_queried_object()->data->ID,
  'order' => 'DESC'
);

$query = new WP_Query($args);

$user_query = new WP_User_Query(array('role' => array('editor')));
$equipe = $user_query->get_results();

?>

<div class="archive-author">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">

        <div class="info-author">
          <div class="imagem-author" style="background-image: url(<?php echo get_field('foto', $ID); ?>)"></div>
          <div class="tie">EQUIPe</div>
          <h1 class="title-1">
            <?php echo get_queried_object()->data->display_name; ?>
          </h1>
          <p>
            <?php echo get_field('biografia'); ?>
          </p>
          <div class="redes">
            <a href="<?php the_field('facebook', $ID) ?>" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
            <a href="<?php the_field('instagram', $ID) ?>" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
            <a href="<?php the_field('linkedin', $ID) ?>" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="area-posts d-lg-block d-none">
          <div class="tie">BLOG</div>
          <h4 class="title-1 mb-4">Principais publicações</h4>
          <?php if($query->have_posts()): ?>
            <?php while($query->have_posts()): $query->the_post(); ?>
            <div class="post-single">
              <p>
                Postado dia <?php echo get_the_date("d/m/Y"); ?> ás <?php echo get_the_date("G:i"); ?>
              </p>
              <a href="<?php echo get_the_permalink() ?>" class="solucao-single" style="background-image: url(<?php the_post_thumbnail_url() ?>)">
                <?php the_title(); ?>
              </a>
            </div>
            <?php endwhile; ?>
          <?php else: ?>
          <h4 class="title-1">Nenhum Post</h4>
          <?php endif; ?>
        </div>
      </div>
      <div class="col-lg-8">
        <h2 class="title-1 mb-5">
          <?php echo get_field('titulo', $ID); ?>
        </h2>
        <div class="mb-5">
          <?php echo get_field('descricao', $ID); ?>
        </div>
        <div class="title-1 mb-4">
          Educação e certificações
        </div>
        <?php if( have_rows('certificados', $ID) ): ?>
        <div class="certificacoes">
          <?php while ( have_rows('certificados', $ID) ) : the_row(); ?>
          <div class="certificado-single">
            <p>
              <?php if(get_sub_field('linha_1')): ?>
                <?php the_sub_field('linha_1'); ?>
              <?php endif; ?>
              <?php if(get_sub_field('linha_2')): ?>
                <br> <?php the_sub_field('linha_2'); ?>
              <?php endif; ?>
            </p>
          </div>
          <?php endwhile; ?>
        </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <div id="equipe" class="mt-5 pt-5">
    <div class="content-equipe author-page d-lg-flex d-none">
    <?php $cont = 1; foreach ($equipe as $equipe_user): ?>
      <?php if($equipe_user->ID != $id_current_user): ?>
      <a class="membro-single <?php echo $cont % 2 === 0 ? 'par' : 'impar' ?>" href="<?php echo get_author_posts_url($equipe_user->ID); ?>" style="background-image: url(<?php the_field('foto_card','user_'.$equipe_user->ID); ?>)">
        <p class="title-men">
          <?php the_field('nome','user_'.$equipe_user->ID); ?>
        </p>
        <p class="cargo">
          <?php the_field('cargo','user_'.$equipe_user->ID); ?>
        </p>
      </a>
      <?php $cont++; endif; ?>
    <?php endforeach; ?>
    </div>
    <ul class="d-lg-none d-block">
      <?php foreach ($equipe as $equipe_user): ?>
        <?php if($equipe_user->ID != $id_current_user): ?>
        <li>
          <a href="<?php echo get_author_posts_url($equipe_user->ID); ?>"><?php the_field('nome','user_'.$equipe_user->ID); ?></a>
        </li>
        <?php endif; ?>
      <?php endforeach; ?>
    </ul>
  </div>
</div>

<?php get_footer(); ?>