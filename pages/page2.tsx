export interface Page2Props {
  messages: string[];
}

export default function Page2(props: Page2Props) {
  return props.messages.map((message, i) => <p key={i}>{message}</p>);
}

export async function getStaticProps(): Promise<{ props: Page2Props }> {
  return { props: { messages: ['foobar'] } };
}
