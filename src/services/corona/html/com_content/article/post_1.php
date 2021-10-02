<?php
defined('_JEXEC') or die;

$document = JFactory::getDocument();

$postStyles = <<<STYLES
<style>
.u-section-1 .u-sheet-1 {
  min-height: 835px;
}
.u-section-1 .u-post-details-1 {
  min-height: 375px;
  margin-top: 60px;
  margin-bottom: -10px;
}
.u-section-1 .u-container-layout-1 {
  padding: 30px;
}
.u-section-1 .u-image-1 {
  height: 486px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.u-section-1 .u-text-1 {
  margin-top: 20px;
  margin-bottom: 0;
  margin-left: 0;
}
.u-section-1 .u-metadata-1 {
  margin-top: 30px;
  margin-bottom: 0;
  margin-left: 0;
}
.u-section-1 .u-text-2 {
  margin-bottom: 0;
  margin-top: 20px;
  margin-left: 0;
}
@media (max-width: 1199px) {
  .u-section-1 .u-post-details-1 {
    height: 715px;
  }
  .u-section-1 .u-image-1 {
    margin-left: initial;
  }
}
@media (max-width: 991px) {
  .u-section-1 .u-sheet-1 {
    min-height: 782px;
  }
  .u-section-1 .u-post-details-1 {
    margin-bottom: 60px;
    height: 662px;
  }
  .u-section-1 .u-image-1 {
    height: 423px;
    margin-left: initial;
  }
}
@media (max-width: 767px) {
  .u-section-1 .u-sheet-1 {
    min-height: 722px;
  }
  .u-section-1 .u-post-details-1 {
    height: 602px;
  }
  .u-section-1 .u-container-layout-1 {
    padding-left: 10px;
    padding-right: 10px;
  }
  .u-section-1 .u-image-1 {
    height: 354px;
    margin-top: 9px;
    margin-left: initial;
  }
}
@media (max-width: 575px) {
  .u-section-1 .u-sheet-1 {
    min-height: 656px;
  }
  .u-section-1 .u-post-details-1 {
    height: 536px;
  }
  .u-section-1 .u-image-1 {
    height: 275px;
    margin-left: initial;
  }
}
</style>
STYLES;
JFactory::getDocument()->addCustomTag($postStyles);

$document->hideHeader = false;
$document->hideFooter = false;
$document->bodyClass = 'u-body';
$document->bodyStyle = "";
$document->localFontsFile = "";
$document->backToTop=<<<BACKTOTOP

BACKTOTOP;

echo $component->pageHeading();

$beforeDisplayContent = $this->item->event->beforeDisplayContent;

$index = 0;
${'title' . $index} = strlen($article->title) ? $this->escape($article->title) : '';
${'titleLink' . $index} = strlen($article->titleLink) ? $article->titleLink : '';
${'shareLink' . $index} = strlen($article->shareLink) ? $article->shareLink : '';
${'content' . $index} = $beforeDisplayContent . $article->text($article->text);
${'image' . $index} = $article->images['fulltext']['image'];
${'tags' . $index} = count($article->tags) > 0 ? implode('', $article->tags) : '';

${'metadata' . $index} = array();
if (strlen($article->author)) {
    ${'metadata' . $index}['author'] = $article->authorInfo($article->author, $article->authorLink);
}
if (strlen($article->published)) {
    ${'metadata' . $index}['date'] = $article->publishedDateInfo($article->published);
}
if (strlen($article->category)) {
    ${'metadata' . $index}['category'] = $article->categories($article->parentCategory, $article->parentCategoryLink, $article->category, $article->categoryLink);
}

if ($this->item->params->get('access-edit')) {
    ${'metadata' . $index}['edit']  = $article->editIcon();
}

include_once dirname(dirname(dirname(dirname(__FILE__)))) . '/views/postTemplate_0_post_1.php';

$afterDisplayContent = $this->item->event->afterDisplayContent;
if ($afterDisplayContent) {
    ?>
    <section><div class="u-sheet"><?php echo $afterDisplayContent; ?></div></section>
<?php } ?>