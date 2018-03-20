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
  display: flex;
  flex-direction: column;

  @include media-breakpoint-up('md') {
    flex-direction: row;
  }

  &__sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
    align-self: flex-start;
    padding: 2em 1em;
    overflow: auto;

    @include media-breakpoint-up('md') {
      width: 16em;
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
</style>
