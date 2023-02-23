import React from 'react'
import styles from "../privacy/privacy.module.css"
import Image from 'next/image'
import right_hand from "@/public/main-images/righthand.png"
import left_hand from "@/public/main-images/lefthand.png"

const Privacy = () => {
  return (
    <main className='min-h-screen flex flex-col items-center justify-start pt-[158px] max-[1300px]:!pt-[80px]  px-[9vw] max-[1300px]:!px-[3vw] relative overflow-hidden'>

      <h1 className={styles.Montserrat700_2 + ` mt-[1vw] font-montserrat 
      
      min-[2560px]:!text-[6rem] 
      max-[1860px]:!text-[4rem] 
      max-[1700px]:!text-[3.5rem] 
      max-[1500px]:!text-[3rem] 
      max-[1330px]:!text-[2.8rem] 
      max-[1400px]:!leading-[2.8rem] 
      max-[1400px]:!mt-[10vw] 
      max-[820px]:!mt-[13vw] 
      
      max-[1140px]:!text-[2.5rem] 
      max-[950px]:!text-[2.3rem] 
      max-[850px]:!text-[2.2rem]
      max-[800px]:!text-[2.1rem] 
      max-[800px]:!leading-[2.1rem]
      max-[600px]:!text-[2rem]
      max-[490px]:!text-[1.85rem] 
      max-[430px]:!text-[1.7rem] 
      max-[400px]:!text-[1.55rem] 
      max-[350px]:!text-[1.4rem]`}>
        Политика <br /> конфиденциальности
      </h1>

      <Image
        src={right_hand}
        alt="правая рука"
        className={styles.right_hand +
          ` max-[1300px]:!w-[30%] 
          max-[1300px]:!top-[1.5%] 
          max-[750px]:!top-[1.3%] 
          max-[600px]:!top-[1%]
          max-[450px]:!top-[0.8%]  
            `}
      />

      <div className='mt-[2vw] mb-[15vw]'>
        <p className={styles.font_au + " font-montserrat  min-[2560px]:!text-[6.5rem] max-[1650px]:!text-[22px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
          Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации,
          которую Интернет-магазин «FlyBoots», расположенный на доменном имени www.flyboots.store,
          может получить о Пользователе во время использования сайта Интернет-магазина,
          программ, услуг и продуктов Интернет-магазина.
        </p>

        <h2 className='mt-[60px] text-4xl  max-[1330px]:!text-3xl max-[900px]:!text-2xl max-[500px]:!text-xl font-bold'>
          1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ
        </h2>
        <div>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            1.1. В настоящей Политике конфиденциальности используются следующие термины:
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            1.1.1. «Администрация сайта Интернет-магазина (далее – Администрация сайта) » – уполномоченные сотрудники на управления сайтом,
            действующие от имени самозанятого Дмитриева Егора Сергеевича, которые организуют и (или) осуществляют обработку персональных данных,
            а также определяют цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции),
            совершаемые с персональными данными.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            1.1.2. «Персональные данные» — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            1.1.3. «Обработка персональных данных» — любое действие (операция) или совокупность действий (операций),
            совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными,
            включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование,
            передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            1.1.4. «Конфиденциальность персональных данных» — обязательное для соблюдения Оператором или иным получившим доступ
            к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            1.1.5. «Пользователь сайта Интернет-магазина (далее — Пользователь)» – лицо, имеющее доступ к Сайту, посредством сети Интернет и использующее Сайт интернет-магазина.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            1.1.6. «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя,
            который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            1.1.7. «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, построенной по протоколу IP.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            1.1.8. Услуга —  это результат взаимодействия продавца и покупателя, а также собственной деятельности продавца по удовлетворению потребностей покупателя при купле-продаже товаров.
          </p>
        </div>
        <h2 className='mt-[60px] text-4xl  max-[1330px]:!text-3xl max-[900px]:!text-2xl max-[500px]:!text-xl font-bold'>
          2. ОБЩИЕ ПОЛОЖЕНИЯ
        </h2>
        <div>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            2.1. Использование Пользователем сайта Интернет-магазина означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.

          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта Интернет-магазина.

          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            2.3. Настоящая Политика конфиденциальности применяется только к сайту Интернет-магазина FlyBoots. Интернет-магазин не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на сайте Интернет-магазина.

          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            2.4. Администрация сайта не проверяет достоверность персональных данных, предоставляемых Пользователем сайта Интернет-магазина.
          </p>
        </div>
        <h2 className='mt-[60px] text-4xl  max-[1330px]:!text-3xl max-[900px]:!text-2xl max-[500px]:!text-xl font-bold'>
          3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ
        </h2>
        <div>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта интернет-магазина по неразглашению и обеспечению режима защиты конфиденциальности персональных данных,
            которые Пользователь предоставляет по запросу Администрации сайта при регистрации на сайте интернет-магазина или при оформлении заказа для приобретения Товара и Услуг.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения регистрационной формы на Сайте интернет-магазина FlyBoots и включают в себя следующую информацию:
            <ol>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                3.2.1. фамилию, имя, отчество Пользователя;
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                3.2.2. контактный телефон Пользователя;
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                3.2.3. адрес электронной почты (e-mail);
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                3.2.4. адрес доставки Товара;
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                3.2.5. место жительство Пользователя.
              </li>
            </ol>
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            3.3. Интернет-магазин защищает Данные, которые автоматически передаются в процессе просмотра рекламных блоков и при посещении страниц,
            на которых установлен статистический скрипт системы ("пиксель"):
            <ol>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                IP адрес;
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                Информация из cookies;

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                Информация о браузере (или иной программе, которая осуществляет доступ к показу рекламы);

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                Время доступа;

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                Адрес страницы, на которой расположен рекламный блок;

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                Реферер (адрес предыдущей страницы).
              </li>
            </ol>
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            3.3.1. Отключение cookies может повлечь невозможность доступа к частям сайта Интернет-магазина, требующим авторизации.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            3.3.2. Интернет-магазин осуществляет сбор статистики об IP-адресах своих посетителей.
            Данная информация используется с целью выявления и решения технических проблем,
            для контроля законности проводимых финансовых платежей.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            3.4. Любая иная персональная информация неоговоренная выше (история покупок, используемые браузеры и операционные системы и т.д.)
            подлежит надежному хранению и нераспространению, за исключением случаев, предусмотренных в п.п. 5.2. и 5.3. настоящей Политики конфиденциальности.
          </p>

        </div>
        <h2 className='mt-[60px] text-4xl  max-[1330px]:!text-3xl max-[900px]:!text-2xl max-[500px]:!text-xl font-bold'>
          4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ
        </h2>
        <div>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            4.1. Персональные данные Пользователя Администрация сайта интернет-магазина может использовать в целях:
            <ol>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.1. Идентификации Пользователя, зарегистрированного на сайте Интернет-магазина, для оформления заказа и (или) заключения Договора купли-продажи товара дистанционным способом с FlyBoots.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.2. Предоставления Пользователю доступа к персонализированным ресурсам Сайта интернет-магазина.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.3. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта интернет-магазина, оказания услуг, обработка запросов и заявок от Пользователя.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.4. Определения места нахождения Пользователя для обеспечения безопасности, предотвращения мошенничества.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.5. Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.6. Создания учетной записи для совершения покупок, если Пользователь дал согласие на создание учетной записи.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.7. Уведомления Пользователя Сайта интернет-магазина о состоянии Заказа.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.8. Обработки и получения платежей, подтверждения налога или налоговых льгот, оспаривания платежа, определения права на получение кредитной линии Пользователем.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.9. Предоставления Пользователю эффективной клиентской и технической поддержки при возникновении проблем связанных с использованием Сайта интернет-магазина.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.10. Предоставления Пользователю с его согласия, обновлений продукции, специальных предложений, информации о ценах, новостной рассылки и иных сведений от имени Интернет-магазина или от имени партнеров Интернет-магазина.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.11. Осуществления рекламной деятельности с согласия Пользователя.

              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                4.1.12. Предоставления доступа Пользователю на сайты или сервисы партнеров Интернет-магазина с целью получения продуктов, обновлений и услуг.

              </li>
            </ol>
          </p>
        </div>
        <h2 className='mt-[60px] text-4xl  max-[1330px]:!text-3xl max-[900px]:!text-2xl max-[500px]:!text-xl font-bold'>
          5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ
        </h2>
        <div>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом,
            в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            5.2. Пользователь соглашается с тем, что Администрация сайта вправе передавать персональные данные третьим лицам,
            в частности, курьерским службам, организациями почтовой связи, операторам электросвязи, исключительно в целях выполнения заказа Пользователя,
            оформленного на Сайте интернет-магазина «FlyBoots», включая доставку Товара.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            5.3. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти
            Российской Федерации только по основаниям и в порядке, установленным законодательством Российской Федерации.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            5.4. При утрате или разглашении персональных данных Администрация сайта информирует Пользователя об утрате или разглашении персональных данных.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            5.5. Администрация сайта принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            5.6. Администрация сайта совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий,
            вызванных утратой или разглашением персональных данных Пользователя.
          </p>
        </div>
        <h2 className='mt-[60px] text-4xl  max-[1330px]:!text-3xl max-[900px]:!text-2xl max-[500px]:!text-xl font-bold'>
          6. ОБЯЗАТЕЛЬСТВА СТОРОН
        </h2>
        <div>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            6.1. Пользователь обязан:
            <ol>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                6.1.1. Предоставить информацию о персональных данных, необходимую для пользования Сайтом интернет-магазина.
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                6.1.2. Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации.
              </li>
            </ol>
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            6.2. Администрация сайта обязана:
            <ol>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                6.2.1. Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности.
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                6.2.2. Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя,
                а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами переданных персональных данных Пользователя,
                за исключением п.п. 5.2. и 5.3. настоящей Политики Конфиденциальности.
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                6.2.3. Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя согласно порядку,
                обычно используемого для защиты такого рода информации в существующем деловом обороте.
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                6.2.4. Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю,
                с момента обращения или запроса Пользователя или его законного представителя либо уполномоченного органа по защите прав субъектов персональных данных на период проверки,
                в случае выявления недостоверных персональных данных или неправомерных действий.
              </li>
            </ol>
          </p>

        </div>
        <h2 className='mt-[60px] text-4xl  max-[1330px]:!text-3xl max-[900px]:!text-2xl max-[500px]:!text-xl font-bold'>
          7. ОТВЕТСТВЕННОСТЬ СТОРОН
        </h2>
        <div>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            7.1. Администрация сайта, не исполнившая свои обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с неправомерным использованием персональных данных,
            в соответствии с законодательством Российской Федерации, за исключением случаев, предусмотренных п.п. 5.2., 5.3. и 7.2. настоящей Политики Конфиденциальности.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            7.2. В случае утраты или разглашения Конфиденциальной информации Администрация сайта не несёт ответственность, если данная конфиденциальная информация:
            <ol>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                7.2.1. Стала публичным достоянием до её утраты или разглашения.
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                7.2.2. Была получена от третьей стороны до момента её получения Администрацией сайта.
              </li>
              <li className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
                7.2.3. Была разглашена с согласия Пользователя.
              </li>
            </ol>
          </p>
        </div>
        <h2 className='mt-[60px] text-4xl  max-[1330px]:!text-3xl max-[900px]:!text-2xl max-[500px]:!text-xl font-bold'>
          8. РАЗРЕШЕНИЕ СПОРОВ
        </h2>
        <div>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            8.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем сайта Интернет-магазина и Администрацией сайта,
            обязательным является предъявление претензии (письменного предложения о добровольном урегулировании спора).
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            8.2 .Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно уведомляет заявителя претензии о результатах рассмотрения претензии.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            8.3. При не достижении соглашения спор будет передан на рассмотрение в судебный орган в соответствии с действующим законодательством Российской Федерации.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            8.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией сайта применяется действующее законодательство Российской Федерации.
          </p>
        </div>
        <h2 className='mt-[60px] text-4xl  max-[1330px]:!text-3xl max-[900px]:!text-2xl max-[500px]:!text-xl font-bold'>
          9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ
        </h2>
        <div>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            9.1. Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            9.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте интернет-магазина, если иное не предусмотрено новой редакцией Политики конфиденциальности.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            8.3. При не достижении соглашения спор будет передан на рассмотрение в судебный орган в соответствии с действующим законодательством Российской Федерации.
          </p>
          <p className={styles.font_au + " mt-[1.5vw]  font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            9.3. Действующая Политика конфиденциальности размещена на странице по адресу https://flyboots/privacy/.
          </p>
        </div>
      </div>

      <Image
        src={left_hand}
        alt="левая рука"
        className={styles.left_hand + `
        max-[1300px]:!w-[30%] 
        max-[1300px]:!top-[1.5%] 
        max-[750px]:!top-[1.3%] 
        max-[600px]:!top-[1%] 
        max-[450px]:!top-[0.8%]  
        `}
      />

    </main>)
}

export default Privacy