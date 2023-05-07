# Rise Online Discord Bot
* Rise Online Bot displays the current GB prices, items and characters for sale up-to-date for you.
* (Rise Online Bot güncel GB fiyatlarını, satılık itemleri ve karakterleri sizler için güncel olarak gösterir.)

## Projenin Amacı
Farklı sitelerden Puppeteer, Axios veya got-scraping ile alınan sayfaların verisini Cheerio HTML Parse ettikten sonra yine Cheerio ile scraping işlemi yapıyoruz. Gerekli bilgileri her bir fonksiyonun içine yerleştirdikten sonra Discord üzerinden bu bilgileri almak için ilgili komutları kullanarak güncel verilere ulaşabiliyoruz.


  
## Kullanılan Teknolojiler

**Sunucu:** Discord.js, Node.js

**Kütüphaneler:** Axios, Cheerio, got-scraping, Puppeteer (aktif olarak kullanılmıyor.)


## Komutlar

```http
  Tüm komutların başına / etiketi konulmalıdır.
```

| Komut İsmi | Verilerin Alındığı Siteler     | Açıklama                |
| :--------  | :------- | :------------------------- |
| `/gb`      | `Vatan Game, Oyuneks, OyunFor ` | İlgili sitelerden güncel GB fiyatlarını getirir.|



| Komut İsmi | Verilerin Alındığı Siteler     | Açıklama                |
| :--------  | :------- | :------------------------- |
| `/itemal`      | `Vatan Game` | İlgili sitelere yüklenen güncel eşya satış ilanlarını gösterir.|



## Ekran Görüntüleri
#### /gb komutu
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/443t0y9.png)

![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/ebx4ccd.png)

#### /itemal komutu
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/5p60u9y.png)

![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/im92hf3.png)

![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/6klablg.png)

![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/qmwzroc.png)


## Lisans

[MIT](https://choosealicense.com/licenses/mit/)