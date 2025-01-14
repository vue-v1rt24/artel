<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui';
import type { TypesVideo } from '~/types/pages/news.types';

//
const { videos } = defineProps<{
  videos: TypesVideo;
}>();

// console.log(videos);

//
const emit = defineEmits<{
  loadData: [nextPage: string];
}>();

//
const loadModalIframe = (url: string) => {
  Fancybox.show(
    [
      {
        src: url + '&autoplay=1',
        type: 'iframe',
        preload: false,
      },
    ],
    {
      mainClass: 'video_dec',
      tpl: {
        closeButton:
          '<buton type="button" data-fancybox-close class="video_modal__ntn_close"><img src="/images/close-fon-selver.svg"/></buton>',
      },
    },
  );
};

//
onUnmounted(() => {
  if (Fancybox.destroy) {
    Fancybox.destroy();
  }
});
</script>

<template>
  <div class="videos_bx">
    <div class="container">
      <h2 class="h2_56">Видео</h2>

      <!--  -->
      <div class="videos">
        <div
          v-for="video in videos.content"
          :key="video.databaseId"
          @click="loadModalIframe(video.videoTypeFields.videoSsylkaIzIframeVk)"
          class="video"
        >
          <div class="video__img">
            <NuxtImg
              :src="video.featuredImage.node?.mediaItemUrl"
              format="avif, webp"
              densities="x1"
              loading="lazy"
              alt=""
            />
          </div>

          <h3 class="video__title">{{ video.title }}</h3>
        </div>
      </div>

      <!--  -->
      <UiButton
        v-if="videos.pagination.hasNextPage"
        width="100%"
        title="Показать ещё"
        bg="var(--green-50)"
        text-color="var(--main-green)"
        @btn-click="emit('loadData', videos.pagination.endCursor)"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.videos_bx {
  margin-top: 140px;

  /*  */
  @media (max-width: 768px) {
    margin-top: 100px;
  }

  @media (max-width: 576px) {
    margin-top: 60px;
  }
}

/*  */
.videos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 30px;
  margin-top: 60px;

  /*  */
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 42px 30px;
    margin-top: 52px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 576px) {
    gap: 32px 30px;
    margin-top: 32px;
  }
}

/*  */
.video {
  cursor: pointer;
}

/*  */
.video__img {
  position: relative;
  border-radius: 24px;
  overflow: hidden;

  /*  */
  &::before {
    content: '';
    opacity: 0;
    position: absolute;
    inset: 0;
    background-color: rgba(23, 45, 45, 0.6);
    background-image: url(/images/play-button.svg);
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity var(--transition-speed);
  }

  .video:hover &::before {
    opacity: 1;
  }

  /*  */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/*  */
.video__title {
  max-width: 378px;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: var(--main-green);
  margin-top: 26px;

  /*  */
  @media (max-width: 576px) {
    font-size: 18px;
    margin-top: 16px;
  }
}

/*  */
.btn {
  margin-top: 60px;

  /*  */
  @media (max-width: 768px) {
    margin-top: 42px;
  }

  @media (max-width: 576px) {
    margin-top: 32px;
  }
}
</style>

<style>
.video_dec {
  .fancybox__content {
    width: auto !important;
    height: auto !important;
    background-color: transparent;
    padding: 0;
  }

  .fancybox__iframe {
    width: 1054px;
    height: 594px;
    margin: auto;
    border-radius: 24px;

    /*  */
    @media (max-width: 1300px) {
      width: 996px;
      height: 560px;
    }

    @media (max-width: 1240px) {
      width: 690px;
      height: 388px;
    }

    @media (max-width: 730px) {
      width: 500px;
      height: 281px;
    }

    @media (max-width: 576px) {
      width: 400px;
      height: 225px;
      border-radius: 20px;
    }

    @media (max-width: 440px) {
      width: 320px;
      height: 180px;
    }
  }
}

/*  */
.video_modal__ntn_close {
  position: absolute;
  top: 0;
  right: -100px;
  cursor: pointer;

  /*  */
  @media (max-width: 992px) {
    top: -78px;
    right: 0;
  }

  @media (max-width: 768px) {
    width: 46px;
  }

  @media (max-width: 576px) {
    top: -56px;
    width: 38px;
  }
}
</style>
