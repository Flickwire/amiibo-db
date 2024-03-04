export type AmiiboResponse = {
  amiibo?: (AmiiboEntity)[] | null;
}

export type AmiiboEntity = {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: Release;
  tail: string;
  type: string;
}

export type Release = {
  au?: string | null;
  eu?: string | null;
  jp?: string | null;
  na?: string | null;
}
