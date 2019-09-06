import { createGlobalStyle } from 'styled-components'

export const IconFontstyle = createGlobalStyle`　

@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1566972070822'); /* IE9 */
  src: url('./iconfont.eot?t=1566972070822#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPQAAsAAAAAB9gAAAOBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDFIJ7ATYCJAMQCwoABCAFhG0HRxvsBsgeBW7s8MLCh897EQ/f36fnvn+zbhagTDCAGQ/wsrbjFWtJa7jjLpD/a9P+AGnpsC7U3Eh3PTIQsUdmVeVmdN1P4jfRUy0BAkB94t5p0zbYfJblNNaitel/7qIuwHhrYHtim7ICLZAEvWV4tUvhoA8TQNsIUdC6pKoJeBwyKoC4tyoG4DNOXAM58BCfioUJ6Al0+LKMeQjgMfh+/ENCPEChq4BM3ByLzZD3FfTtCzu3ay6M9Sigms4PeRmogCWQIM6VwS02yiyxsNmdkwI08RgwVVvKty9dXaA+ipGnf3kgsBgQdSDELsAKshX4CuJSAnylKKtMXzBBAXyQBU2gDTwAz0BYc89LDK7n6ysM6Mbz/YUZy++G0RbTlBMX0OvXU5sQ1guQ2bwQrDTrs6TceVrqrVf+e2dI2pumbaSXL5tevWpe8Sa3edOKEzvUN2/0aXnJVV6/7omlbk3YLowavXkE3jmoxXBJWAHQDtyKlz9G8/T6ecELZjVfPApzjwkrbiCUEFgedJdEJxYlJBTFpkgrg1Dh2DEBjcHr/BMT/dftP9Cyu3/edk07f7q66sfp0z+Yj/vzios5K6SeoWm6IJLBLDt/fpmrYyQXsyyZnEGC6jRt6+DE4VfXMva1a+1gZ9ZGRfA20CqXPgsrekZ6dBkLX9tyapuZAqM15w3XluOlt9JikS4/xh0uWbuPEyrzMr6M19MHg/u3DQn+HTwCPAC3C+w9tjwQtrNzWOB3sa3OwH/y+ff5qQk9s/7zAgeAl5Xph3H4doGDYarfoOqs+l+qjmVpaYgr09BypR1KcalRCtCGgb9UYOzdFOZZZyKB1z9B4Ws4KrwgajKjUCNIQh0vF22RSpd39KViofQDsLAIAenlDBg9aGD18ojKMd9CZ4Dv8NErFpgUfTcUhGTFhSoxUGIWjdNEq8ntkpmH4pDcQJRJDoOa1gQCiahea1yMj4nL50uJi6hTTPFOVhIolUVZdTvFEnQccTjcokd124iJxlgo9WTExspVD4oxuZ2AFVIRBhRhJjKaRmRl4uYie9UpXPh8A0IxiYOB2lDSlJUQKi9r56J4MeI6UEuNrk4lt3KK12SKBBQlE8lUbk6iEuQnHDTjJvJU97MhTKgYlgEpjwyxUEnuaoxZ3ux8wzXQRnplMIhFHNKBcO0TvYTGxSemYtngUswGm9VLM/kGAAAAAA==') format('woff2'),
  url('./iconfont.woff?t=1566972070822') format('woff'),
  url('./iconfont.ttf?t=1566972070822') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1566972070822#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*
.iconiconset0137:before {
  content: "\e624";
}

.iconfangdajing:before {
  content: "\e6e4";
}

.iconAa:before {
  content: "\e636";
}
*/

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1567683462975'); /* IE9 */
  src: url('./iconfont.eot?t=1567683462975#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKoAAsAAAAABmQAAAJaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApwgQoBNgIkAwgLBgAEIAWEbQcuG64FyK4wbuGJgIC0oGGFJrf9Scv9VABEEL/f/2bP3a+aVJNLFscyiUYoj0iCFuiU4qFZiHb3f03TIQqT58tyyKqoD/IPOJeRAjSaPNubUJuu6oSbUFtG1PNn1tBXUgjy9kvUJTUDrqmfQA8S2wHNrZMiAyMBRwMeaAeORhSMG8YucAmPCbQbk5c73zpowJBkrQrEK8fSYCgXlpLlWoXmmoMp3mvSWt6WL+Bd+Pv4DasxRNFUsRquXm6asPJDu6A6rxte+IQIAR1vQoUVIIm72vSFXsG4Xu2n+0wBKQU/rGvsEnu1C/bXWdWdYAQq7knpqm61uoCMs1PALmbzxtLnuJF99ulGNJq5Tqf95svDQ7ak8fn68fOL3O5vuqSrPXcfPu56Vs6sj1ay/D+z593/KTda99Ls6YBgY+gpfHKh1tGFp77nNlxSNxKqBlp37Al+kLLnUOpqy1lSVdZ6i6lRKwvataOG/f1+xlqG7iYfWg3dk7fFaIpKqxky2RU06bCOZq2O0G7Z9vEOA1ivyDYsuQEIvZ5RdPuISq9vMtkumgz7RbPe6EW7h5i9sMNcOCPrTJqQifopOkYUKsctI1FtjaxDX+OsOuRbxKkTw0qxXMxtU0g8x5b0yKqKKFQcBbgFniPfjzDmyCVDirZIPFcqqbo3FY0ogBFnGNEIYkK6U8hhiISUP1mMlL5fQyyHfBpuaavJthCWcmZHFUXlHuS2IezVdi+vpI5YqoRQkMIiAbQF5hGfL4Li+nkuYhBF9ohkbE7JHqf6Gorrm4IPKGddWNYSdmslX8dOCAAAAAA=') format('woff2'),
  url('./iconfont.woff?t=1567683462975') format('woff'),
  url('./iconfont.ttf?t=1567683462975') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1567683462975#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before {
  content: "\\e851";
}



`;
