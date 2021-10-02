<?php
    $document = JFactory::getDocument();
?>
    <header class="u-clearfix u-custom-color-5 u-header u-sticky u-sticky-aa5c u-header" id="sec-d9fc">
  <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
    <?php $logoInfo = getLogoInfo(array(
            'src' => "/images/default-logo.png",
            'href' => "https://nicepage.com",
        ), true); ?><a href="<?php echo $logoInfo['href']; ?>" class="u-image u-logo u-image-1" data-image-width="80" data-image-height="40">
      <img src="<?php echo $logoInfo['src']; ?>" class="u-logo-image u-logo-image-1">
    </a>
    <?php echo CoreStatements::position('hmenu', '', 1, 'hmenu'); ?>
  </div>
</header>
    