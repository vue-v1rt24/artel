<script setup lang="ts">
const linkPage = ref<string | null>(null);

//
defineProps<{
  title: string;
}>();

//
onMounted(() => {
  linkPage.value = location.href;
  const shareLinks = document.querySelectorAll('.share_link');

  if (shareLinks) {
    shareLinks.forEach((link, idx) => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();

        const linkData = encodeURI(link.dataset.link);
        const widthWindow = 655;
        const heightWindow = 435;

        const params = `
    width=${widthWindow},
    height=${heightWindow},
    top=${(screen.height - heightWindow) / 2},
    left=${(screen.width - widthWindow) / 2},
    resizable=yes,
    scrollbars=no,
    status=yes`;

        window.open(linkData, `title${idx}`, params);
      });
    });
  }
});
</script>

<template>
  <div class="soc_bx">
    <div class="soc__title">Поделится:</div>

    <ul class="soc">
      <li>
        <a
          class="share_link share_link__style"
          :data-link="`https://vk.com/share.php?url=${linkPage}&title=${title}`"
          rel="nofollow noopener"
          href="#"
          target="_blank"
          title="ВКонтакте"
        >
          <ImagesSocialVK />
        </a>
      </li>
      <li>
        <a
          class="share_link share_link__style"
          :data-link="`https://t.me/share/url?url=${linkPage}&text=${title}`"
          rel="nofollow noopener"
          href="#"
          target="_blank"
          title="Telegram"
        >
          <ImagesSocialTelegram />
        </a>
      </li>
      <li>
        <a
          class="share_link share_link__style"
          :data-link="`https://connect.ok.ru/offer?url=${linkPage}&title=${title}`"
          rel="nofollow noopener"
          href="#"
          target="_blank"
          title="Одноклассники"
        >
          <ImagesSocialOK />
        </a>
      </li>
      <li>
        <a
          class="share_link share_link__style"
          :data-link="`https://api.whatsapp.com/send?text=${linkPage} ${title}`"
          rel="nofollow noopener"
          href="#"
          target="_blank"
          title="WhatsApp"
        >
          <ImagesSocialWhatsapp />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.soc__title {
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: var(--main-green);
  margin-bottom: 18px;
}

/*  */
.soc {
  display: flex;
  column-gap: 18px;

  /*  */
  @media (max-width: 576px) {
    column-gap: 14px;
  }

  /*  */
  a {
    width: 54px;
    height: 54px;
    background-color: var(--green-50);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color var(--transition-speed);

    /*  */
    @media (max-width: 576px) {
      width: 48px;
      height: 48px;
    }

    /*  */
    &:hover {
      background-color: var(--main-green);
    }

    /*  */
    svg {
      color: var(--main-green);
      transition: color var(--transition-speed);

      /*  */
      @media (max-width: 576px) {
        width: 22px;
      }

      /*  */
      a:hover & {
        color: white;
      }
    }
  }
}
</style>
