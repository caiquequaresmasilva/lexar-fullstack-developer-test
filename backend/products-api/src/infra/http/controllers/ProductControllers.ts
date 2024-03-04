import { Request, Response } from 'express';
import { ProductService } from '../../../application/services';
import { CustomError } from '../../../application/errors';
import { FilterParams } from '../../../application/repositories';
import { ProductProps } from '../../../domain';

export class ProductController {
  constructor(private readonly service: ProductService) {}
  async create(req: Request, res: Response): Promise<void> {
    const productRequest: ProductProps[] = req.body;
    try {
      await this.service.create(productRequest);
      res.status(201).json({ message: 'Product created' });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.status).json({ error: error.message });
      } else {
        res
          .status(500)
          .json({ error: (<Error>error).message || 'Internal server error' });
      }
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const productRequest: ProductProps[] = req.body;
    const { id } = req.params;
    try {
      await this.service.update(id, productRequest);
      res.status(200).json({ message: 'Product updated' });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.status).json({ error: error.message });
      } else {
        res
          .status(500)
          .json({ error: (<Error>error).message || 'Internal server error' });
      }
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await this.service.delete(id);
      res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.status).json({ error: error.message });
      } else {
        res
          .status(500)
          .json({ error: (<Error>error).message || 'Internal server error' });
      }
    }
  }

  async search(req: Request, res: Response): Promise<void> {
    const { name } = req.query;
    try {
      const products = await this.service.search(name as string);
      res.status(200).json(products);
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.status).json({ error: error.message });
      } else {
        res
          .status(500)
          .json({ error: (<Error>error).message || 'Internal server error' });
      }
    }
  }

  async filter(req: Request, res: Response): Promise<void> {
    const { brand, color, maxPrice, minPrice }: FilterParams = req.query;
    try {
      const products = await this.service.filter({
        brand,
        color,
        maxPrice: maxPrice ? Number(maxPrice) : 0,
        minPrice: minPrice ? Number(minPrice) : 0,
      });
      res.status(200).json(products);
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.status).json({ error: error.message });
      } else {
        res
          .status(500)
          .json({ error: (<Error>error).message || 'Internal server error' });
      }
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const products = await this.service.findAll();
      res.status(200).json(products);
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.status).json({ error: error.message });
      } else {
        res
          .status(500)
          .json({ error: (<Error>error).message || 'Internal server error' });
      }
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const product = await this.service.findById(id);
      res.status(200).json(product);
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.status).json({ error: error.message });
      } else {
        res
          .status(500)
          .json({ error: (<Error>error).message || 'Internal server error' });
      }
    }
  }
}
