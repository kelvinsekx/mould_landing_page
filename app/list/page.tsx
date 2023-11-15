import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
import { Container } from '@/components/container';

export default async function Waitlist() {
const supabase = createServerComponentClient({cookies})
const {data: waitlist} = await supabase.from('waitlist').select()

  return (
    <Container>
      <pre>{JSON.stringify(waitlist, null, 2)}</pre>
    </Container>
  );
}
