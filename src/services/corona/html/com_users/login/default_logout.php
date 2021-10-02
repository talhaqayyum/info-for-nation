<?php
/**
 * @package     Joomla.Site
 * @subpackage  com_users
 *
 * @copyright   Copyright (C) 2005 - 2019 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

$formClass = <<<FORMCLASS
u-clearfix u-form-custom-backend u-form-spacing-10 u-form-vertical u-inner-form
FORMCLASS;

ob_start();
?><div class="u-align-left u-form-group u-form-submit">
          <a href="#" class="u-btn u-btn-submit u-button-style u-btn-1"><?php echo JText::_('JLOGOUT'); ?></a>
          <input type="submit" value="submit" class="u-form-control-hidden">
        </div><?php
$formSubmit = ob_get_clean();

?>
<section class="u-clearfix">
    <div class="u-clearfix u-sheet">
        <div class="logout<?php echo $this->pageclass_sfx; ?>">
        <?php if ($this->params->get('show_page_heading')) : ?>
            <div class="page-header">
                <h1>
                    <?php echo $this->escape($this->params->get('page_heading')); ?>
                </h1>
            </div>
        <?php endif; ?>
        <?php if (($this->params->get('logoutdescription_show') == 1 && str_replace(' ', '', $this->params->get('logout_description')) != '')|| $this->params->get('logout_image') != '') : ?>
        <div class="logout-description">
        <?php endif; ?>
            <?php if ($this->params->get('logoutdescription_show') == 1) : ?>
                <?php echo $this->params->get('logout_description'); ?>
            <?php endif; ?>
            <?php if ($this->params->get('logout_image') != '') : ?>
                <img src="<?php echo $this->escape($this->params->get('logout_image')); ?>" class="thumbnail pull-right logout-image" alt="<?php echo JText::_('COM_USER_LOGOUT_IMAGE_ALT'); ?>" />
            <?php endif; ?>
        <?php if (($this->params->get('logoutdescription_show') == 1 && str_replace(' ', '', $this->params->get('logout_description')) != '')|| $this->params->get('logout_image') != '') : ?>
        </div>
        <?php endif; ?>
        <div class="u-form">
            <form action="<?php echo JRoute::_('index.php?option=com_users&task=user.logout'); ?>" method="post" class="<?php echo $formClass ? $formClass : 'form-horizontal well'; ?>">
                <?php if ($formSubmit) : ?>
                    <?php echo $formSubmit; ?>
                <?php else: ?>
                    <div class="control-group">
                        <div class="controls">
                            <button type="submit" class="btn btn-primary">
                                <span class="icon-arrow-left icon-white"></span>
                                <?php echo JText::_('JLOGOUT'); ?>
                            </button>
                        </div>
                    </div>
                <?php endif; ?>
                <?php if ($this->params->get('logout_redirect_url')) : ?>
                    <input type="hidden" name="return" value="<?php echo base64_encode($this->params->get('logout_redirect_url', $this->form->getValue('return'))); ?>" />
                <?php else : ?>
                    <input type="hidden" name="return" value="<?php echo base64_encode($this->params->get('logout_redirect_menuitem', $this->form->getValue('return'))); ?>" />
                <?php endif; ?>
                <?php echo JHtml::_('form.token'); ?>
            </form>
        </div>
        </div>
    </div>
</section>
