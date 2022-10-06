export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}
export class Appointment {
  private props: AppointmentProps;

  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props;

    const now = new Date();

    if (startsAt <= now) {
      throw new Error('Start date cannot be before now');
    }

    if (endsAt <= startsAt) {
      throw new Error('End date must be after start date');
    }

    this.props = props;
  }

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }
}