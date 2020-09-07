interface EventEntry {
  readonly id?: string | undefined;
  readonly title: string;
  readonly description: string;
  readonly date: Date;
}

export default EventEntry;
