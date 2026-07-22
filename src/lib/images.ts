import { cacheable } from './cacheable';

export const images = createImages();

function createImages() {
  type API = {
    url: string;
    copyright: string;
  };
  const { subscribe, set, get, update } = cacheable<Array<API>>(
    'County_Images',
    [],
    true,
  );

  async function load() {
    const unique = (wallpapers: API[]) =>
      Array.from(new Map(wallpapers.map((item) => [item.url, item])).values());

    // if (!get().length) {
    const url = './assets/data/images.json';
    const res = await fetch(url);
    const json = await res.json();
    const images = unique(json.images);
    console.log(images.length);
    set(images);
    // }
    back();
  }

  async function back() {
    const { src, alt } = await prepare();
    document.documentElement.style.cssText = `background-image: url(${src});`;
    document.documentElement.title = alt;
  }

  async function prepare() {
    const image = get()[Math.floor(Math.random() * get().length)];
    // const width = ratio(window.innerWidth);

    return {
      src: 'https://bing.com' + image.url,
      alt: image.copyright.split('(©')[0],
    };

    // function ratio(size: number) {
    //   return size * devicePixelRatio;
    // }
  }

  return {
    subscribe,
    set,
    update,
    load,
    prepare,
    back,
  };
}

function imageInfo(src: string): Promise<{
  width: number;
  height: number;
  aspect: number;
}> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const aspect = img.width / img.height;
      resolve({
        width: img.width,
        height: img.height,
        aspect: Number(aspect.toFixed(2)),
      });
    };
    img.onerror = reject;
    img.src = src;
  });
}

export async function findMaxDays() {
  for (let i = 0; i <= 365; i += 8) {
    const response = await fetch(
      `https://www.bing.com/HPImageArchive.aspx?format=json&idx=${i}&n=1&mkt=en-US`,
    );
    const data = await response.json();

    if (!data.images || data.images.length === 0) {
      console.log(`Максимально доступны обои за ${i} дней`);
      return i;
    }
  }
}
