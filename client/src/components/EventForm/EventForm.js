import styled from 'styled-components'

const Form = styled.form`
    margin: 1rem auto;

    @media screen and (min-width: 960px) {
        width: 60%;
    }
`
const Control = styled.div`
    margin: 1rem 0;
`
const SubmitBtn = styled.button`
    margin-top: 1.25rem;
`

export const EventForm = () => {
    return (
      <div className="container">
        <Form action="">
            <Control>
                <label className="sr-only" htmlFor="event_title">Event title</label>
                <input className="input is-medium is-rounded" name="event_title" type="text" placeholder="Title of your event" />
            </Control>

            <Control>
                <label className="sr-only" htmlFor="last_name" >Last name</label>
                <input className="input is-medium is-rounded" name="last_name" type="text" placeholder="Last name" />
            </Control>

            <Control>
                <label className="sr-only" htmlFor="first_name">First name</label>
                <input className="input is-medium is-rounded" name="first_name" type="text" placeholder="First name" />
            </Control>

            <Control>
                <label className="sr-only" htmlFor="email">Email</label>
                <input className="input is-medium is-rounded"  name="email" type="text" placeholder="E-mail" />
            </Control>

            <Control>
                <label className="sr-only checkbox" htmlFor="participate">
                    <input type="checkbox" name="participate"/>
                    Participate to the event
                </label>
            </Control>

            <SubmitBtn className="button is-rounded" type="submit">Create event</SubmitBtn>
        </Form>
      </div>
    );
}
  