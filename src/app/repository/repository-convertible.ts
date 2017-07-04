export interface RepositoryConvertible {

  /**
   * Converts the raw data from repository to the entity which implements.
   * 
   * @param {any} raw Raw data from repository.
   */
  convertFromRepository(raw: any): RepositoryConvertible;
  
}
