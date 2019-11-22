  
<?php 
/* Template Name: Modalidades */ 
get_header();
$args = array(
  'orderby' => 'name',
  'order' => 'ASC'
);
$categories = get_categories($args);
?>

<div class="cursos-template">
  <?php if($categories): ?>
  <div class="owl-carousel owl-theme cursos">
    <?php foreach($categories as $category): ?>
    <div class="item">
      <div class="item-single">
        <div class="title-primary">
          <?php echo $category->name; ?>
        </div>
        <a href="<?php echo get_category_link( $category->term_id ) ?>" class="explore">Explore</a>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
  <?php endif; ?>
</div>

<?php get_footer(); ?>