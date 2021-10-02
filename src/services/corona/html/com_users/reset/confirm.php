<?php
defined('_JEXEC') or die;

JHtml::_('behavior.keepalive');
JHtml::_('behavior.formvalidator');

$formClass = <<<FORMCLASS
u-clearfix u-form-custom-backend u-form-spacing-10 u-form-vertical u-inner-form
FORMCLASS;

ob_start();
?><div class="u-align-left u-form-group u-form-submit">
          <a href="#" class="u-btn u-btn-submit u-button-style u-btn-1"><?php echo JText::_('JSUBMIT'); ?></a>
          <input type="submit" value="submit" class="u-form-control-hidden">
        </div><?php
$formSubmit = ob_get_clean();

ob_start();
?><div class="u-form-group u-form-name">
          <label for="[[label_for]]" class="u-label" name="[[label_name]]">[[label_content]]</label>
          <input type="[[input_type]]" placeholder="[[input_placeholder]]" id="[[input_id]]" name="[[input_name]]" class="u-border-grey-30 u-input u-input-rectangle u-input-1" required="">
        </div><?php
$inputHtml = ob_get_clean();
?>
<section class="u-clearfix">
    <div class="u-clearfix u-sheet">
        <div class="reset-confirm<?php echo $this->pageclass_sfx; ?>">
            <?php if ($this->params->get('show_page_heading')) : ?>
                <div class="page-header">
                    <h1>
                        <?php echo $this->escape($this->params->get('page_heading')); ?>
                    </h1>
                </div>
            <?php endif; ?>
            <div class="u-form">
                <form action="<?php echo JRoute::_('index.php?option=com_users&task=reset.confirm'); ?>" method="post" class="<?php echo $formClass ? $formClass : 'form-validate form-horizontal well'; ?>">
                    <?php
                        foreach ($this->form->getFieldsets() as $fieldset) {
                            if (isset($fieldset->label)) {
                                echo '<p>' . JText::_($fieldset->label) . '</p>';
                            }
                            if ($inputHtml) {
                                $fields = $this->form->getFieldset($fieldset->name);
                                foreach ($fields as $field) {
                                    echo str_replace(
                                        array('[[label_for]]', '[[label_name]]', '[[label_content]]', '[[input_type]]', '[[input_placeholder]]', '[[input_id]]', '[[input_name]]'),
                                        array($field->id, $field->id . '-lbl', $field->title, $field->type, '', $field->id, $field->name),
                                        $inputHtml
                                    );
                                }
                            } else {
                                echo $this->form->renderFieldset($fieldset->name);
                            }
                        }
                    ?>
                    <?php if ($formSubmit) : ?>
                        <?php echo $formSubmit; ?>
                    <?php else: ?>
                        <div class="control-group">
                            <div class="controls">
                                <button type="submit" class="btn btn-primary validate">
                                    <?php echo JText::_('JSUBMIT'); ?>
                                </button>
                            </div>
                        </div>
                    <?php endif; ?>
                    <?php echo JHtml::_('form.token'); ?>
                </form>
            </div>
        </div>
    </div>
</section>
