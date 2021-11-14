<template>
  <div class="container hotCity">
    <h2 class="d-flex align-items-center mb-3">
      <div class="triangleShapeIcon me-4"></div>
      熱門城市
    </h2>
    <div class="position-relative">
      <a class="carouselBtnLeft d-none d-lg-flex" href="#"
      @click.prevent="offsetLeft()" v-if="change">
        <i class="bi bi-caret-left-fill"></i>
      </a>
      <div class="cardCarousel">
        <div class="cardCarousel-wrap">
          <ul ref="slides"
            :style="{'transform': `translateX(${currentOffset}px)`}"
            class="
              cardCarousel-list
              row row-cols-lg-5 row-cols-md-4 row-cols-2
              gx-3
              flex-nowrap
              list-unstyled
            "
          >
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/8ebc/0b4b/b701280a93a8b720da843f847ef2e159?Expires=1637539200&Signature=GmFYN~SHqH5zdRb03DYbFf5httlMM-eL01zTQ0lJtbrxV3k-VQewBVzcrn5CgN4OszTbdAhTFahT1iUXUeLnm6vdgPrjqUPcZpiExN~JV1wfVwtYB7cmJskim64ejc7TDSDXi-UW5aurCerbNHnGZ-YnpImpKNhvSiPrOOQBIKlYXhotAJEM4bvVk0gCYpVdJHvtvzGy~MFyRor9lugtxqPHStIxzaRT~PThqjsXdvayZKwL4fv3vjE31Y4U4Km7Re74q0t4tFAPLQlapdXRFXNL9wpKyiTkGzY9nba9w2fy6UB2jteDpfWbv7mVZcmDS3iotq0dn-4s6TmHHjT24w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">台北市</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3236/1bc3/b471bdde761ade479deb719bc45cc4c3?Expires=1637539200&Signature=OwdeAgcHdkgXiPZ2oTQe3AEa3~HrpqOEJ5RLEbJ9UMBp61SiLd07aQyqo3TY~OdPudY84tr4MnVp-l9OXBYoGf6hS-edr3fvWT9uctH-NsltFA00KiDlR~fvP68wAttRmbH~k2Q5ltpf2IkjSTVyPkjTEDwOsCGy~RM3UxiVs~y5tmvzOAXkX57Fmn-mCa7ztCC6We7Z9FhGqnl4Xim9rlyb1quzEFyQCa0YtX6PS2wlgEgUshR8wvAs86y9Z93BqtWp6IpekNGQrrU0xuT-nacCEBWZGfDLCakCMjutjYiA2wFSr~sGRUrpH5PoqmMhsP8bng52R7sH-A6dDH3-KA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">新北市</a>
                    </h5>
                  </div>
                </div>
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5816/358b/46ccc67bf46dceeb39e402dd59bb6650?Expires=1637539200&Signature=DhAhvcG9janc0Tg9mVWgP6SfAmV1pvQS-aoa1heSvJXJjN-q1LefB3Tgyd-CnnE2Wfzej83wYSD88xGqn8FwgGpoWotD8wPaoQse03fQyfgA8eO08A8Lhg31diV8AxoYVpl5BnU7Fuvt0BesQQujXgR0ZmreWyq~nUcYDgPXpiS528JUmM-h0T009P06uJI~foPHcmc6uYl8Dz2yTBSKT5zd-R01Boi8xPXTz2~kyxRUfrU8paQ52SwDzaDXBiUGC562Rw~XlMmdWOZ8cjej8CWsVrp1FwgMb6mruQmLE48j8UCUsjQTeaDbLArlhxZ1lnvIxxOb6fyd0hig23noCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">桃園市</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/a05a/4c77/8600432a3919a211696796dc6d21d061?Expires=1637539200&Signature=Xh7QCIophyB019rzFj0gtVHock3mz13f7QrUEsmqoeHyeF7U9oBzL7SoRUPKGS1U06PCoOwOGBB9Mb0tdN6quVaKHrjXcVY48UaRmurSL51EEPh5KnSkYiunPTPq8heYw4cJysl0TOpCucC6LVYby6CV-A7bQwrytDuw4VrltlBUATedgXxhoMNipVoS6cjdjVbpiZ~jyS~T14bs9bQ6diyPZg0cHKN-1HXE-Yam-A~yeuuMiN1D8ZxCATRHY3CcjsaZd5a4VTh2DVE0rFpBY5TuaDuWuFSEvpqbPuKe-j4sFjfZdySxQZNPbsN53Tqwt7jJ94l~smE1sGfehXxLNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">新竹市</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/92d7/1f11/46b799eb09fbeba1b0f7ccf467523d5c?Expires=1637539200&Signature=FAvGbQ6tPWskRDFG6CdtG9BMCT0CR5gqrepapP9tb6uZv9VCXKDQXxL90kb6-7ZXyqCzT8minHBUutyPeKuoajgD20O-PFdr3~MTuD2GWjqDl2k7Es0GIdtgOB7LD0Exv37CJleg29utc98aQLXNXmKkwPonWREfRZVP69ZOJT3YLsjaWY-I41wWU~O~xkOwIccb4dXiiYy~IrcWMdJx2BjKxhx~jPy2uPCZ~3IaMRVigd66xjfvJNgunE5IXEpYwjDf3bEdWrKbL3vWTCe13adp9~TxOJVfZJZ04o6JNLM8HFNGrTc6GaMif7c3tCTxLisSdByzJyQKks4LqCJOvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">台中市</a>
                    </h5>
                  </div>
                </div>
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0a43/8bd9/08fcf9a8247cecbd08657ce4763df5f0?Expires=1637539200&Signature=K0qVDQehzqIviSoTYPDjf3MsrC11a8rY~s9UZZ2f8aoG5n7IF7qjZdqTY5nIvSf595luI50JygT7I8G37SyUzeCPIqCMQMCtH0Cvuat8ap9-8APAZun-xET~KK~A4neXjkBGJ89ENixeQhBPDWUL9X4ikICccgm9PaBNdWRCqB85HOaKl291Am2Xx7gggEC9px2BDKZRN6wXzWGxCiNc73L0hgOfvxDnqOjYWk2Sb-F4KMJ1Hlizb6R-ZU~ke5Ubj2KunBiZoQmwwkaBw174kf8nYMCwM3IicXWk6SsUzhPq46jXX3HJVLdZDYrMUtplJeEmgtb0qZLXK2ggrn~exw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">南投</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/d761/4e8e/91f323dd2c566942b1e7c72b1ed21132?Expires=1637539200&Signature=PNAT~EbH3aIdhofvCfDcBziW5XrGrtEFp0IuPRlenLtdZS922neEnTkPQK9ed0pozh0Y3-CZs9mYlRvKcbMAfif-8laz2sUlVyBFAz39j6WC~4E~D~UzV~iwvpjk6x7q8ttbV5BEQeIsQVRZ42ROszKvIz8cep-0bQFv6mvqVvdk0qpBiMx7Yl-FybQK82Su9Zx-iUhtGJxwfGXsnjkMg1ziZxQ~lIMXM0qsNO2iaEXv1vGVJMi9zS4pHL3sDWbtJ9kX9BhzMe~oHBeDliF4V~M9eQvBvHZKCVNL-XOlA4w~qcKR5Em-wwa7Lgv2FQStwsSUzCv4mlehpYGhqgbrxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">嘉義</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/a977/95b2/52723262db1afa2b4275c120b8cd60e0?Expires=1637539200&Signature=fAoNGpxtSYdG0mCaTISf-RWpL7Bk47l-GT3nCqELuI8n4STG29uIzJKHM~MYyHnWRFY5A5gsKrSqIpd6ISSJlxWQD7UsKX1dpQtfOpS2OB4qIy7p~BHZSZIY7cBQTqGgE6fQHvmJzHL9LPG9LMUiYuaI6SZxVp3WmAJ2Z-k3EzYlxgivWGkt4ydQRLFHN4PZs5-71V1ke2gxF9CDz9D0wsQblNZikCQ2lr5FADFoNMlwDtUBgzPN9ZzC2MXG222c3n9TGhX1Ox~m7e3jy4rZT5~9gI-ElFF7l8zG8VmVipfIpcKpKXoLy5dkTWHTcJ9IiPtJvKZZ5e6MhTgBzTKjbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">台南</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/47ce/2019/bed3879d9fd48bd276df43ec97d000d6?Expires=1637539200&Signature=cGjeNJG6-yVRkSdnXMCrvh76pJrVMUaDjmONoUk7D4lNvjtzuTqm2VERyUjY67~Z8fzmM1w1BWw90v7PRQ593n3fJNnbjtOUmxp9YYCTIuvQ15RLKl7zqBvgPJXnDul5h4sR5-GVTymjDKha86HUDyEo5h1g1~KBO8rFp1BzujmDOOQIkZmITI1uh1ih1DxfQz5hT5nbfsgm9sJK9l3~DsK~gRt90wZ4fUh3mdOngN8feMmgEbnd~4TKGVqsristgzAgHHQ1oci5uF~MbSAghbn6tqdSKSHFNAFxdOFcP6dY-S0RQsAl9J5Sr5QzEmNg-as9lntx~74k41sT1E-s2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">高雄</a>
                    </h5>
                  </div>
                </div>
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/a54f/c0a4/81b7ae3f973480860db085531858c606?Expires=1637539200&Signature=dFZeVLF5xbyrcNqIKdlI5TlDAMfoIuoTpHSQ87R5vNrFAZYkH7nr~eDh0HI-f204qdaUT5tUoyYpVOT7PM~hsfcbZdRZQ8V9eShGrVeYDgIxmSnqVHyvyog5Ru2X4s-4JNV1uhSFBt9vlT7DNyD9TVsdmFKGRUDTdJl~hkO~RybTXneRzNXHtuvg~VxlvR-Qyj8Zly-HBPkbGx3TBaw0wOIoiIOkE-gIxlmdO33q7UrmURWhh7zddJ5CukcHKcu2oQoW3AB2BFtzjifFt6RXLi-gCFbZVatQpLAfPeQUKmbZwQ8nhpO93JTqoBg94Cnv~32xGKpyVBvpJ-lo72sXTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">屏東</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/2a86/93d5/5ddd867a7c29b2d82b4d54311be48b44?Expires=1637539200&Signature=XG-EPyaGCTklS2Dbqcwm9ltFFHtEwxS1fOD8rkrLkz75tEK2PWAVHfI~k5j8aIYxZSDHpxoxifFTwMFMKMOcTJdHxiYc8J92rxQPLX-MxgZ6knxknZbI-dZMkeExVM3d1Zfxp3WvhfxU3KauRzCR8Kcfc2Z-BuapM7KdjdgnT2JkoQw6h6C6U3hnMgHfnLH8eTL44kVQTVXqODPN6AAAysTskEgTgAJdBQ1dSRB2Obv2fmHmgbcZXoH6TnmWN1P4Yn0vbhp0lWph-N-w1St1PWAfapohk9rAw9cxIZEMSblIVEeyUgjcLgGx5QCNaeC8UDIi1JVoS8WGfMDVo7lSEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">宜蘭</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/6a8e/bf8f/eed6a816b3d1dd313206b6430d434951?Expires=1637539200&Signature=FGb57NI6iC36cFVEbBmiUdgBt4DWikrOUHGic2titFU26R3ZR82nPIdJuo~f-Rtzoy0Bi35EQESRZ2G0TvhbOTV1tvw-aZuAaMwOW9emFMZj3TS3N22~lbRI9CkIzgLoPhv-0WJ4KcXUA86IRMlBJQrjZL-FJ2mxE3R3rGWSvXorIdRf2SsGxETsF~kM6gjEUbcBLgK1-4X~r0S7HurhPVRzGRaVdHhVNew~uMJ35QDoGjRjZPqeSfm46qaOS1dpQAI~ZB0X5UW~4rK4ld~4xyBlAAz47HaNojkzPtV~2gGYulVBlbZ6BZmeydOQ-Z-0mkBLc9EAcpr~VLoC40izjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">花蓮</a>
                    </h5>
                  </div>
                </div>
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0d15/c7e2/6227aa7d0deb3648ca696722d7c413d6?Expires=1637539200&Signature=GARMdRddlwcTVi7PmGCcwcIel-E06oACgmQSbSuil8zeOTKQu0007R-VPpvqGiiwiAxKLGeVUZE3phmsOk3Y3tb3r8hn-FDwk-MWAp~WPw~Vot7sOq9SfX9T4Ium7T1CcEefWj4JWjJMg5CURDCSOl7HF~LBqe~81GaG8JpdmQPn6T3bk7VaZDryVw03W6GYnhKyTth4bQVcxZPN3IEpJzSZaEb2kR1e2AVspE2P0IXva6ef-hNOj0fDk1AFcHfofqR3YLS18ssOHuZRBkw1T0PM-AJnH4oTrfc1fiqs~vIL08wtl1qmy26pPHiUsbTf5tOuNyPi-gani~UHF7MWLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">台東</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="hotCity-area">
                <div class="card bg-white text-white p-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/57da/c44e/09996761a3b1e109ec2733529b099755?Expires=1637539200&Signature=GDE2frAmYK4irMmOaaRY8G9isCoCXTUTfDkOgxg-F7~X4TuUOC3j3fM0Na-uOB2nd2qaWKFsEr6J10yEzthwwZ7H6Q62iwA4F3ht9dVLhs136W7xqEIsKKvmeXRi4VQPLKnjmjalafiIXzGFF-Ol~3bDhp5XG8eV1~Q6Do71mX1ziWUuvM1hJtVQ7d-zcz5YwBbMRkdvoPuagm47zwiHumGx16rGFEoDhoamTb3sQsdZ1IPaoU1ZyHtujp346YILldPOQQUkHuK5UbecelJA-do2adacjVBjXaRPzebz2E-1KR3dHSY075TGx3RIvB1TCSNYNKUX8G0sJt6HQJGxvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    class="card-img"
                    alt="..."
                  />
                  <div
                    class="
                      card-img-overlay
                      d-flex
                      align-items-center
                      justify-content-center
                      flex-column
                    "
                  >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 class="card-title">
                      <a href="#" class="text-decoration-none stretched-link link-light">金門澎湖</a>
                    </h5>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <a class="carouselBtnRight d-none d-lg-flex" href="#"
      @click.prevent="offsetRight()" v-if="!change">
        <i class="bi bi-caret-right-fill"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentOffset: 0,
      offsetWidth: 0,
      change: false,
    };
  },
  methods: {
    offsetRight() {
      this.currentOffset -= this.offsetWidth;
      this.change = !this.change;
    },
    offsetLeft() {
      this.currentOffset += this.offsetWidth;
      this.change = !this.change;
    },
  },
  mounted() {
    this.offsetWidth = this.$refs.slides.offsetWidth;
  },
};
</script>
