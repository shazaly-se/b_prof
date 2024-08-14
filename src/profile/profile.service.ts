import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Details } from '../entities/Details';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Details) private readonly detailsRepository:Repository<Details>){}
    async getDetails():Promise<Details>{
        return await this.detailsRepository.findOne({
            where: { id:1 },
              relations: ['experiences', 'educations', 'skills','projects'],
        })

        
    }
}
