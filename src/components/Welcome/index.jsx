/* eslint-disable react/prop-types */
import React from 'react';

// Styles
import styles from './welcome.module.scss';

export default function Welcome() {
  return (
    <>
      <div className={styles.welcome}>
        <div className={`${styles.welcomeWrap} lg:max-w-2xl xl:max-w-3xl`}>
          <div className={styles.welcomeText}>
            <h1>GPT GOUV BENIN!</h1>
            <p>Ce chatbot du gouvernement béninois est désormais disponible en version Alpha.0.1 pour </p>
              <p> répondre à vos questions relatives au code général des  </p>
                <p>impôts, au code du numérique, au code du travail et au code pénal du Bénin.</p>
          </div>
          <div className={styles.wGrid}>
            <div className={styles.column}>
              <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                Exemples
              </h2>

              <ul className="text-sm">
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    &quot;Pourquoi suis-je tenu de payer l’AIB ?&quot; →
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    &quot;Quels sont les revenus perçus par un salarié en cas d’arrêt maladie ?&quot; →
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    &quot;Est-ce que la signature électronique est autorisée au Bénin ?&quot; →
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  ></path>
                </svg>
                Capacité :
              </h2>

              <ul className="text-sm">
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                   Ce chatbot est capable de comprendre le contexte et le fil des conversations.
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    Il a été entraîné pour ne pas répondre à toutes vos questions.
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    Il peut reformuler les codes en langage simple.
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Avertissement :
              </h2>

              <ul className="text-sm">
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                   Cet outil a été entraîné sur une partie des données disponibles.
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    Les réponses fournies peuvent être incomplètes ou biaisées.
                  </div>
                </li>
                <li>
                  <div className="w-full flex content-center justify-center text-center bg-gray-50 dark:bg-white/5 p-3 rounded-md cursor-default">
                    Ce chatbot ne remplace pas les experts et vous devez vous référer à eux pour des conseils précis.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
