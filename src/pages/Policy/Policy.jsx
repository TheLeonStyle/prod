import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Policy.module.scss';

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLink = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className={styles.policy}>
      <div className={styles.policy__container}>
        <header className={styles.policy__header}>
          <Link to="/" onClick={handleLink} className={styles.policy__link}>
            на главную
          </Link>
        </header>
        <h2 className={styles.policy__title}>Политика в отношении обработки персональных данных</h2>
        <div className={styles.policy__wrapper}>
          <h6 className={styles.policy__suptitle}>
            Политика в отношении обработки персональных данных
          </h6>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>
              1. Общие положения Настоящая политика обработки персональных данных составлена в
              соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных
              данных» и определяет порядок обработки персональных данных и меры по обеспечению
              безопасности персональных данных, предпринимаемые Маилян Аркади Радикович (далее –
              Оператор).
            </p>
            <p className={styles.policy__subtitle}>
              1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности
              соблюдение прав и свобод человека и гражданина при обработке его персональных данных,
              в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
            </p>
            <p className={styles.policy__subtitle}>
              1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее –
              Политика) применяется ко всей информации, которую Оператор может получить о
              посетителях веб-сайта https://am-prod.media/.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>2. Основные понятия, используемые в Политике</p>
            <p className={styles.policy__subtitle}>
              2.1. Автоматизированная обработка персональных данных – обработка персональных данных
              с помощью средств вычислительной техники;
            </p>
            <p className={styles.policy__subtitle}>
              2.2. Блокирование персональных данных – временное прекращение обработки персональных
              данных (за исключением случаев, если обработка необходима для уточнения персональных
              данных);
            </p>
            <p className={styles.policy__subtitle}>
              2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ
              для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу
              https://am-prod.media/;
            </p>
            <p className={styles.policy__subtitle}>
              2.4. Информационная система персональных данных — совокупность содержащихся в базах
              данных персональных данных, и обеспечивающих их обработку информационных технологий и
              технических средств;
            </p>
            <p className={styles.policy__subtitle}>
              2.5. Обезличивание персональных данных — действия, в результате которых невозможно
              определить без использования дополнительной информации принадлежность персональных
              данных конкретному Пользователю или иному субъекту персональных данных;
            </p>
            <p className={styles.policy__subtitle}>
              2.6. Обработка персональных данных – любое действие (операция) или совокупность
              действий (операций), совершаемых с использованием средств автоматизации или без
              использования таких средств с персональными данными, включая сбор, запись,
              систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение,
              использование, передачу (распространение, предоставление, доступ), обезличивание,
              блокирование, удаление, уничтожение персональных данных;
            </p>
            <p className={styles.policy__subtitle}>
              2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое
              лицо, самостоятельно или совместно с другими лицами организующие и (или)
              осуществляющие обработку персональных данных, а также определяющие цели обработки
              персональных данных, состав персональных данных, подлежащих обработке, действия
              (операции), совершаемые с персональными данными;
            </p>
            <p className={styles.policy__subtitle}>
              2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к
              определенному или определяемому Пользователю веб-сайта https://am-prod.media/;
            </p>
            <p className={styles.policy__subtitle}>
              2.9. Пользователь – любой посетитель веб-сайта https://am-prod.media/;
            </p>
            <p className={styles.policy__subtitle}>
              2.10. Предоставление персональных данных – действия, направленные на раскрытие
              персональных данных определенному лицу или определенному кругу лиц;
            </p>
            <p className={styles.policy__subtitle}>
              2.11. Распространение персональных данных – любые действия, направленные на раскрытие
              персональных данных неопределенному кругу лиц (передача персональных данных) или на
              ознакомление с персональными данными неограниченного круга лиц, в том числе
              обнародование персональных данных в средствах массовой информации, размещение в
              информационно-телекоммуникационных сетях или предоставление доступа к персональным
              данным каким-либо иным способом;
            </p>
            <p className={styles.policy__subtitle}>
              2.12. Трансграничная передача персональных данных – передача персональных данных на
              территорию иностранного государства органу власти иностранного государства,
              иностранному физическому или иностранному юридическому лицу;
            </p>
            <p className={styles.policy__subtitle}>
              2.13. Уничтожение персональных данных – любые действия, в результате которых
              персональные данные уничтожаются безвозвратно с невозможностью дальнейшего
              восстановления содержания персональных данных в информационной системе персональных
              данных и (или) уничтожаются материальные носители персональных данных.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>
              3. Оператор может обрабатывать следующие персональные данные Пользователя 3.1.
              Фамилия, имя, отчество;
            </p>
            <p className={styles.policy__subtitle}>3.2. Электронный адрес;</p>
            <p className={styles.policy__subtitle}>3.3. Номера телефонов;</p>
            <p className={styles.policy__subtitle}>
              3.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в
              т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл
              Аналитика и других).
            </p>
            <p className={styles.policy__subtitle}>
              3.5. Вышеперечисленные данные далее по тексту Политики объединены общим понятием
              Персональные данные.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>4. Цели обработки персональных данных</p>
            <p className={styles.policy__subtitle}>
              4.1. Цель обработки персональных данных Пользователя — информирование Пользователя
              посредством отправки электронных писем; заключение, исполнение и прекращение
              гражданско-правовых договоров.
            </p>
            <p className={styles.policy__subtitle}>
              4.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах
              и услугах, специальных предложениях и различных событиях. Пользователь всегда может
              отказаться от получения информационных сообщений, направив Оператору письмо на адрес
              электронной почты arkadi.mailyan@mail.ru с пометкой «Отказ от уведомлений о новых
              продуктах и услугах и специальных предложениях».
            </p>
            <p className={styles.policy__subtitle}>
              4.3. Обезличенные данные Пользователей, собираемые с помощью сервисов
              интернет-статистики, служат для сбора информации о действиях Пользователей на сайте,
              улучшения качества сайта и его содержания.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>
              5. Правовые основания обработки персональных данных
            </p>
            <p className={styles.policy__subtitle}>
              5.1. Оператор обрабатывает персональные данные Пользователя только в случае их
              заполнения и/или отправки Пользователем самостоятельно через специальные формы,
              расположенные на сайте https://am-prod.media/. Заполняя соответствующие формы и/или
              отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с
              данной Политикой.
            </p>
            <p className={styles.policy__subtitle}>
              5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это
              разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и
              использование технологии JavaScript).
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>
              6. Порядок сбора, хранения, передачи и других видов обработки персональных данных
              Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается
              путем реализации правовых, организационных и технических мер, необходимых для
              выполнения в полном объеме требований действующего законодательства в области защиты
              персональных данных.
            </p>
            <p className={styles.policy__subtitle}>
              6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные
              меры, исключающие доступ к персональным данным неуполномоченных лиц.
            </p>
            <p className={styles.policy__subtitle}>
              6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы
              третьим лицам, за исключением случаев, связанных с исполнением действующего
              законодательства.
            </p>
            <p className={styles.policy__subtitle}>
              6.3. В случае выявления неточностей в персональных данных, Пользователь может
              актуализировать их самостоятельно, путем направления Оператору уведомление на адрес
              электронной почты Оператора arkadi.mailyan@mail.ru с пометкой «Актуализация
              персональных данных».
            </p>
            <p className={styles.policy__subtitle}>
              6.4. Срок обработки персональных данных является неограниченным. Пользователь может в
              любой момент отозвать свое согласие на обработку персональных данных, направив
              Оператору уведомление посредством электронной почты на электронный адрес Оператора
              arkadi.mailyan@mail.ru с пометкой «Отзыв согласия на обработку персональных данных».
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>
              7. Трансграничная передача персональных данных
            </p>
            <p className={styles.policy__subtitle}>
              7.1. Оператор до начала осуществления трансграничной передачи персональных данных
              обязан убедиться в том, что иностранным государством, на территорию которого
              предполагается осуществлять передачу персональных данных, обеспечивается надежная
              защита прав субъектов персональных данных.
            </p>
            <p className={styles.policy__subtitle}>
              7.2. Трансграничная передача персональных данных на территории иностранных государств,
              не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия
              согласия в письменной форме субъекта персональных данных на трансграничную передачу
              его персональных данных и/или исполнения договора, стороной которого является субъект
              персональных данных.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>8. Заключительные положения</p>
            <p className={styles.policy__subtitle}>
              8.1. Пользователь может получить любые разъяснения по интересующим вопросам,
              касающимся обработки его персональных данных, обратившись к Оператору с помощью
              электронной почты arkadi.mailyan@mail.ru.
            </p>
            <p className={styles.policy__subtitle}>
              8.2. В данном документе будут отражены любые изменения политики обработки персональных
              данных Оператором. Политика действует бессрочно до замены ее новой версией.
            </p>
            <p className={styles.policy__subtitle}>
              8.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по
              адресу https://am-prod.media/policy.
            </p>
          </div>

          <h6 className={styles.policy__suptitle}>Personal data processing policy</h6>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>
              1. General Provisions This personal data processing policy has been drawn up in
              accordance with the requirements of the Federal Law of July 27, 2006. № 152-ФЗ "On
              personal data" and determines the procedure for processing personal data and measures
              to ensure the security of personal data taken by Mailyan Arkadi Radikovich
              (hereinafter referred to as the Operator).
            </p>
            <p className={styles.policy__subtitle}>
              1.1. The operator sets as its most important goal and condition for the implementation
              of its activities the observance of human and civil rights and freedoms when
              processing his personal data, including the protection of the rights to privacy,
              personal and family secrets.
            </p>
            <p className={styles.policy__subtitle}>
              1.2. This Operator's policy regarding the processing of personal data (hereinafter
              referred to as the Policy) applies to all information that the Operator can obtain
              about visitors to the website https://am-prod.media/.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>2. Basic concepts used in the Policy</p>
            <p className={styles.policy__subtitle}>
              2.1. Automated processing of personal data - processing of personal data using
              computer technology;
            </p>
            <p className={styles.policy__subtitle}>
              2.2. Blocking of personal data - temporary termination of the processing of personal
              data (except for cases where processing is necessary to clarify personal data);
            </p>
            <p className={styles.policy__subtitle}>
              2.3. Website - a set of graphic and information materials, as well as computer
              programs and databases, ensuring their availability on the Internet at the network
              address https://am-prod.media/;
            </p>
            <p className={styles.policy__subtitle}>
              2.4. Personal data information system - a set of personal data contained in databases,
              and information technologies and technical means ensuring their processing;
            </p>
            <p className={styles.policy__subtitle}>
              2.5. Depersonalization of personal data - actions as a result of which it is
              impossible to determine, without the use of additional information, the belonging of
              personal data to a specific User or other subject of personal data;
            </p>
            <p className={styles.policy__subtitle}>
              2.6. Processing of personal data - any action (operation) or a set of actions
              (operations) performed using automation tools or without using such tools with
              personal data, including collection, recording, systematization, accumulation,
              storage, clarification (update, change), extraction, use, transfer (distribution,
              provision, access), depersonalization, blocking, deletion, destruction of personal
              data;
            </p>
            <p className={styles.policy__subtitle}>
              2.7. Operator - a state body, municipal body, legal entity or individual,
              independently or jointly with other persons organizing and (or) carrying out the
              processing of personal data, as well as determining the purposes of processing
              personal data, the composition of personal data to be processed, actions (operations)
              performed with personal data;
            </p>
            <p className={styles.policy__subtitle}>
              2.8. Personal data - any information relating directly or indirectly to a specific or
              identifiable User of the website https://am-prod.media/;
            </p>
            <p className={styles.policy__subtitle}>
              2.9. User - any visitor to the website https://am-prod.media/;
            </p>
            <p className={styles.policy__subtitle}>
              2.10. Provision of personal data - actions aimed at disclosing personal data to a
              certain person or a certain circle of persons;
            </p>
            <p className={styles.policy__subtitle}>
              2.11. Dissemination of personal data - any actions aimed at disclosing personal data
              to an indefinite circle of persons (transfer of personal data) or at acquaintance with
              the personal data of an unlimited number of persons, including the disclosure of
              personal data in the media, posting on information and telecommunication networks or
              providing access to personal data in any other way;
            </p>
            <p className={styles.policy__subtitle}>
              2.12. Cross-border transfer of personal data - transfer of personal data to the
              territory of a foreign state to the authority of a foreign state, to a foreign
              individual or foreign legal entity;
            </p>
            <p className={styles.policy__subtitle}>
              2.13. Destruction of personal data - any actions as a result of which personal data
              are destroyed irrevocably with the impossibility of further restoring the content of
              personal data in the personal data information system and (or) material carriers of
              personal data are destroyed.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>
              3. The operator can process the following personal data of the User 3.1. Full Name;
            </p>
            <p className={styles.policy__subtitle}>3.2. Email address;</p>
            <p className={styles.policy__subtitle}>3.3. Phone numbers;</p>
            <p className={styles.policy__subtitle}>
              3.4. Also, the site collects and processes anonymized data about visitors (including
              cookies) using Internet statistics services (Yandex Metrica and Google Analytics and
              others).
            </p>
            <p className={styles.policy__subtitle}>
              3.5. The above data hereinafter in the text of the Policy are united by the general
              concept of Personal data.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>4. Purposes of personal data processing</p>
            <p className={styles.policy__subtitle}>
              4.1. The purpose of processing the User's personal data is to inform the User by
              sending emails; conclusion, execution and termination of civil contracts.
            </p>
            <p className={styles.policy__subtitle}>
              4.2. The Operator also has the right to send the User notifications about new products
              and services, special offers and various events. The user can always refuse to receive
              informational messages by sending a letter to the Operator to the e-mail address
              arkadi.mailyan@mail.ru marked "Refusal of notifications about new products and
              services and special offers."
            </p>
            <p className={styles.policy__subtitle}>
              4.3. Anonymized data of Users collected using Internet statistics services are used to
              collect information about the actions of Users on the site, improve the quality of the
              site and its content.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>
              5. Legal basis for the processing of personal data
            </p>
            <p className={styles.policy__subtitle}>
              5.1. The Operator processes the User's personal data only if it is filled in and / or
              sent by the User independently through special forms located on the website
              https://am-prod.media/. By filling out the appropriate forms and / or sending his
              personal data to the Operator, the User agrees with this Policy.
            </p>
            <p className={styles.policy__subtitle}>
              5.2. The Operator processes anonymized data about the User if it is allowed in the
              settings of the User's browser (the storage of cookies and the use of JavaScript
              technology are enabled).
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>
              6. Procedure for collecting, storing, transferring and other types of processing of
              personal data The security of personal data processed by the Operator is ensured
              through the implementation of legal, organizational and technical measures necessary
              to fully comply with the requirements of the current legislation in the field of
              personal data protection.
            </p>
            <p className={styles.policy__subtitle}>
              6.1. The operator ensures the safety of personal data and takes all possible measures
              to exclude access to personal data of unauthorized persons.
            </p>
            <p className={styles.policy__subtitle}>
              6.2. The User's personal data will never, under any circumstances, be transferred to
              third parties, except in cases related to the implementation of the current
              legislation.
            </p>
            <p className={styles.policy__subtitle}>
              6.3. In case of revealing inaccuracies in personal data, the User can update them
              independently by sending the Operator a notification to the Operator's e-mail address
              arkadi.mailyan@mail.ru marked "Updating personal data".
            </p>
            <p className={styles.policy__subtitle}>
              6.4. The period for processing personal data is unlimited. The user can at any time
              revoke his consent to the processing of personal data by sending a notification to the
              Operator via e-mail to the Operator's email address arkadi.mailyan@mail.ru with the
              note "Revocation of consent to the processing of personal data".
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>7. Cross-border transfer of personal data</p>
            <p className={styles.policy__subtitle}>
              .1. Before starting the cross-border transfer of personal data, the operator must make
              sure that the foreign state, to whose territory it is supposed to transfer personal
              data, provides reliable protection of the rights of subjects of personal data.
            </p>
            <p className={styles.policy__subtitle}>
              7.2. Cross-border transfer of personal data on the territory of foreign states that do
              not meet the above requirements can be carried out only if there is a written consent
              of the subject of personal data for the cross-border transfer of his personal data and
              / or execution of an agreement to which the subject of personal data is a party.
            </p>
          </div>
          <div className={styles.policy__inner}>
            <p className={styles.policy__subtitle}>8. Final Provisions</p>
            <p className={styles.policy__subtitle}>
              8.1. The user can receive any clarifications on issues of interest regarding the
              processing of his personal data by contacting the Operator via e-mail
              arkadi.mailyan@mail.ru.
            </p>
            <p className={styles.policy__subtitle}>
              8.2. This document will reflect any changes in the personal data processing policy by
              the Operator. The policy is valid indefinitely until it is replaced by a new version.
            </p>
            <p className={styles.policy__subtitle}>
              8.3. The current version of the Policy is freely available on the Internet at
              https://am-prod.media/policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
