Alkulukujen tarkistus käyttäen Reactia frontendissä ja backendissä Expressiä.

Vaatii, että Node.js asennettu (npm asentuu mukana)

Ohjelman saa käyntiin kun avaa komentokehotteen backend-kansion juuressa ja kirjoittaa siihen: npm run setup

Tämä asentaa riippuvuudet, asettaa Expressiin production moodiin ja avaa verkkoselaimen http://localhost:3001/ osoitteeseen.

Frontendistä on luotu build (npm run build frontendin juuressa) ja se asetettu backendin juureen, josta sitä käytetään. Jos tekee muutoksia frontendiin niin sama homma pitää tehdä.

Ohjelma toimii syöttämällä yhden 0-n luvun tai monta lukua pilkulla erotettuna (1,2,3) input kenttään ja tämän jälkeen kertoo käyttäjälle oliko luku tai lukujen summa alkuluku.

Kehitettävää (jätetty pois ajallisista syistä):
- Testausta olisi hyvä olla front ja backendissä tai E2E testausta
- Loggereita voisi käyttää kehitys tai tuotantomoodissa (middlewarena backendissä esim).
- Mobiilipuolella pitäisi asiat olla suhteellisen ok, pientä hienosäätöä tietysti voi olla.
- SEO optimoinnit
- Refaktorointia ja komponentteja voisi vielä eriyttää. Backendissä esim routing asiat voisi laittaan omaan .js tiedostoon, ottaa käyttöön loggeri omaan .js tiedostoon, middlewaret omaan, configit omaan jne
- Backendin virheenkäsittelyä voisi parantaa
- Backendissä turvallisuutta pitäisi parantaa esim middlewarella, jolla voidaan hoitaa validointia, koska tällä hetkellä käyttäjän lähettämää dataa ei tarkasteta sen kummemmin, 
fronendissä perus regex tarkistus, mutta tämä ei ole riittävää.
- CSS voi olla pientä viilattavaa nimeämisessä (.PrimeButton pitäisi olla esim .PrimeContainer)
- Koodia voisi mahdollisesti kommentoida, koodin pitäisi olla kuitenkin selkeää, joten kommentointi voisi aiheuttaa vaan vaikeammin luettavaa koodia.
