import { getRepository, Repository } from 'typeorm';
import ICreateAppointment from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import Appointment from '../entities/Appointment';

// DTO - Data Transfer Object

class AppointmentsRepository implements IAppointmentRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async create({provider_id, date}: ICreateAppointment): Promise<Appointment>{
    const appointment = this.ormRepository.create({ provider_id, date });
    await this.ormRepository.save(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;
