<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__sidebar`">
      <elementa-nav></elementa-nav>
    </div>
    <main :class="`${$options.name}__main`">
      <div :class="`${$options.name}__mainInner`">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
import ElementaNav from './ElementaNav.vue';

export default {
  name: `ElementaTheme`,
  components: {
    ElementaNav,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/reboot';

.ElementaTheme {
  $theme-color: #00acc1;

  display: flex;
  flex-direction: column;

  @include media-breakpoint-up('md') {
    flex-direction: row;
  }

  &::before {
    position: fixed;
    left: 0;
    width: 100%;
    height: 0.25em;
    background-color: $theme-color;
    z-index: 900;
    content: '';

    @include media-breakpoint-up('md') {
      width: 0.5em;
      height: 100%;
    }
  }

  &__sidebar {
    padding: 2em;
    background-color: #F4F5F7;

    @include media-breakpoint-up('md') {
      width: 16em;
      position: sticky;
      top: 0;
      height: 100vh;
      align-self: flex-start;
      overflow: auto;
    }
  }

  &__main {
    flex-grow: 1;
    padding: 2em 1em;
  }

  &__mainInner {
    margin-right: auto;
    margin-left: auto;
    max-width: 42em;
  }
}

/**
 * ElementaControl
 */
.ElementaControl {
  display: flex;
  flex-direction: column;

  &__label {
    margin-bottom: 0.25em;
  }

  &__control {
    display: block;
    width: 100%;
    height: $input-height;
    padding: $input-padding-y $input-padding-x;
    font-size: $font-size-base;
    line-height: $input-line-height;
    color: $input-color;
    background-color: $input-bg;
    background-clip: padding-box;
    border: $input-border-width solid $input-border-color;

    @if $enable-rounded {
      border-radius: $input-border-radius;
    } @else {
      border-radius: 0;
    }

    @include box-shadow($input-box-shadow);
    @include transition($input-transition);

    &::-ms-expand {
      background-color: transparent;
      border: 0;
    }

    @include form-control-focus();

    &::placeholder {
      color: $input-placeholder-color;
      opacity: 1;
    }
  }
}

/**
 * ElementaControlCenter
 */
.ElementaControlCenter {
  margin: 0;
  padding: 0;
  list-style-type: none;

  &__control {
    &:not(:last-child) {
      margin-bottom: 0.75em;
    }
  }
}

/**
 * ElementaDemo
 */
.ElementaDemo {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: $card-bg;
  background-clip: border-box;
  border: $card-border-width solid $card-border-color;
  @include border-radius($card-border-radius);

  &:not(:last-child) {
    margin-bottom: 1em;
  }

  &__title {
    padding: $card-spacer-y $card-spacer-x;
    margin-bottom: 0;
    background-color: $card-cap-bg;
    border-bottom: $card-border-width solid $card-border-color;

    &:first-child {
      @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);
    }
  }

  &__component {
    flex: 1 1 auto;
    padding: $card-spacer-x;
  }

  &__controlCenter {
    padding: $card-spacer-y $card-spacer-x;
    background-color: $card-cap-bg;
    border-top: $card-border-width solid $card-border-color;

    &:last-child {
      @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);
    }
  }
}

/**
 * ElementaNav
 */
.ElementaNav {
  display: flex;

  &__menuToggle {
    $bar-height: 0.125em;

    width: 1.25em;
    height: 1em;
    position: relative;
    margin-left: auto;
    padding: 0;
    align-self: flex-start;
    order: 1;
    background: transparent;
    text-indent: -999em;
    border: none;
    border-bottom: $bar-height solid;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      left: 0;
      width: 100%;
      height: $bar-height;
      background-color: currentColor;
      content: '';
    }

    &::before {
      top: 0;
    }

    &::after {
      top: 50%;
    }

    @include media-breakpoint-up('md') {
      display: none;
    }
  }

  &__list {
    display: none;

    &.is-active {
      display: block;
    }

    @include media-breakpoint-up('md') {
      display: block;
      flex-grow: 1;
    }
  }
}

/**
 * ElementaNavList
 */
.ElementaNavList {
  $text-color: #5E6C84;

  padding-left: 0;
  list-style-type: none;
  color: $text-color;

  &:last-child {
    margin-bottom: 0;
  }

  &__item {
    &--subTitleItem {
      &:not(:first-child) {
        margin-top: 1.25em;
      }

      .ElementaNavList--sub & {
        margin-left: 1em;
      }
    }
  }

  &__title {
    display: block;
    padding: 0.5em;
    line-height: 1.2;

    &--link {
      border-radius: 0.15em;
      transition: background-color 0.2s;

      &,
      &:hover,
      &:focus,
      &:visited {
        color: darken($text-color, 8%);
      }

      &:hover,
      &:focus,
      &.is-active {
        text-decoration: none;
        background-color: lighten($text-color, 47%);
      }
    }

    &--noLink {
      text-transform: uppercase;
      font-size: 0.75em;
      font-weight: 600;
    }
  }
}
</style>
