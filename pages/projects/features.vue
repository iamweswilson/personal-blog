<template>
  <div class="feature-wrapper mt-12 mb-1 rounded-xl bg-white py-16 px-8 shadow-2xl items-center">
    <ul>
      <li>
        <div class="title fast">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="icon lightning">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h2>Super Fast</h2>
        </div>
        <p>You might feel like this gives “moving at the speed of light” a bad name. Just sayin’.</p>
      </li>
      <li>
        <div class="title tested">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon fire">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
          <h2>Battle Tested</h2>
        </div>
        <p>We’ve run it through the coals so many times, we almost feel bad... but we don’t.</p>
      </li>
      <li>
        <div class="title secure">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon fingerprint">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          <h2>Secure</h2>
        </div>
        <p>We’re talking padlock behind steel wall behind retinal scanner type security.</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'importance'
  }
</script>

<style lang="scss" scoped>
  .feature-wrapper {
    transition: all 500ms ease;
  }
  .least {
    ul {
      li {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        transition: all 500ms ease;
        &:last-child {
          margin-bottom: 0;
        }
        .title {
          transition: all 500ms ease;
          border-right: 1px solid transparent;
          .icon {
            width: 0;
            transition: all 500ms ease;
          }
        }
        h2 {
          color: #222;
          font-weight: bold;
          font-size: 1em;
          text-transform: none;
          margin-bottom: 0.1rem;
          padding-right: 0;
          transition: all 500ms ease;
        }
        p {
          transition: all 500ms ease;
          color: #9A9A9A;
          font-size: 0.9em;
          margin: 0.1rem 0;
        }
      }
    }
  }
  .mid {
    ul {
      li {
        display: flex;
        flex-direction: row;
        padding-bottom: 0;
        margin-bottom: 0;
        transition: all 500ms ease;
        &:first-child {
          .title {
            padding-top: 0,
          }
          p {
            margin-top: 0;
          }
        }
        &:last-child {
          .title {
            padding-bottom: 0,
          }
          p {
            margin-bottom: 0;
          }
        }
        .title {
          border-right: 1px solid rgba(0, 110, 172, .2);
          width: 23%;
          min-width: 180px;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 1rem 0;
          transition: 
            all 500ms ease,
            border-color 0s ease-out 0.5s;
          @media (max-width: 640px) {
            flex-direction: column;
            text-align: center;
            justify-content: center;
            min-width: 100px;
          }
          &.fast {
            h2 {
              color: #6E44E7;
            }
            .icon {
              stroke: #6E44E7;
            }
          }
          &.tested {
            h2 {
              color: #E78844;
            }
            .icon {
              stroke: #E78844;
            }
          }
          &.secure {
            h2 {
              color: #DE0404;
            }
            .icon {
              stroke: #DE0404;
            }
          }
          .icon {
            stroke: #162c40;
            display: inline;
            width: 2rem;
            margin-right: .4rem;
            transition: all 500ms ease;
            @media (max-width: 640px) {
              width: 35px;
              margin-right: 0;
              margin-right: 2rem;
            }
          }
          h2 {
            padding-right: 2rem;
            display: inline;
            color: #162c40;
            font-weight: bold;
            font-size: 1em;
            text-transform: none;
            margin-bottom: 0;
            transition: all 500ms ease;
          }
        }
        p {
          transition: all 500ms ease;
          color: #333;
          font-size: 0.9em;
          margin: 1rem 0 0 2rem;
          transition: all 500ms ease;
        }
      }
    }
  }
  .most {
    ul {
      display: flex;
      flex-direction: row;
      text-align: center;
      transition: all 500ms ease;
      @media (max-width: 640px) {
        flex-direction: column;
      }
      li {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        transition: all 500ms ease;
        @media (max-width: 640px) {
          margin-bottom: 2rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .title {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 500ms ease;
          border: 0px solid transparent;
          .icon {
            display: block;
            width: 5rem;
            margin-bottom: 1rem;
            transition: all 500ms ease;
            &.lightning {
              stroke: #6E44E7;
            }
            &.fire {
              stroke: #E78844;
            }
            &.fingerprint {
              stroke: #DE0404;
            }
          }
          h2 {
            margin-bottom: 1rem;
            color: #162c40;
            transition: all 500ms ease;
          }
        }
        p {
          margin: 0;
          color: #444;
          font-size: 0.9em;
          align-items: center;
          transition: all 500ms ease;
        }
      }
    }
  }
</style>