import { Pool } from 'pg'

const connectionString = 'postgres://swuwojml:VrJeGBIIBhit_so6VEoydPb6uPHCAyvi@motty.db.elephantsql.com/swuwojml'
const db = new Pool({ connectionString })

export default db