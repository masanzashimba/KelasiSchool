
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StudentParentRelation
 * 
 */
export type StudentParentRelation = $Result.DefaultSelection<Prisma.$StudentParentRelationPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model StudentArchive
 * 
 */
export type StudentArchive = $Result.DefaultSelection<Prisma.$StudentArchivePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const UserRole: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  PARENT: 'PARENT',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LATE: 'LATE',
  EXCUSED: 'EXCUSED'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentParentRelation`: Exposes CRUD operations for the **StudentParentRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentParentRelations
    * const studentParentRelations = await prisma.studentParentRelation.findMany()
    * ```
    */
  get studentParentRelation(): Prisma.StudentParentRelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentArchive`: Exposes CRUD operations for the **StudentArchive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentArchives
    * const studentArchives = await prisma.studentArchive.findMany()
    * ```
    */
  get studentArchive(): Prisma.StudentArchiveDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    StudentParentRelation: 'StudentParentRelation',
    Class: 'Class',
    Subject: 'Subject',
    Enrollment: 'Enrollment',
    Lesson: 'Lesson',
    Assignment: 'Assignment',
    Exam: 'Exam',
    Attendance: 'Attendance',
    StudentArchive: 'StudentArchive'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "studentParentRelation" | "class" | "subject" | "enrollment" | "lesson" | "assignment" | "exam" | "attendance" | "studentArchive"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StudentParentRelation: {
        payload: Prisma.$StudentParentRelationPayload<ExtArgs>
        fields: Prisma.StudentParentRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentParentRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentParentRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload>
          }
          findFirst: {
            args: Prisma.StudentParentRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentParentRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload>
          }
          findMany: {
            args: Prisma.StudentParentRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload>[]
          }
          create: {
            args: Prisma.StudentParentRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload>
          }
          createMany: {
            args: Prisma.StudentParentRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentParentRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload>[]
          }
          delete: {
            args: Prisma.StudentParentRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload>
          }
          update: {
            args: Prisma.StudentParentRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload>
          }
          deleteMany: {
            args: Prisma.StudentParentRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentParentRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentParentRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload>[]
          }
          upsert: {
            args: Prisma.StudentParentRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentRelationPayload>
          }
          aggregate: {
            args: Prisma.StudentParentRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentParentRelation>
          }
          groupBy: {
            args: Prisma.StudentParentRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentParentRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentParentRelationCountArgs<ExtArgs>
            result: $Utils.Optional<StudentParentRelationCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      StudentArchive: {
        payload: Prisma.$StudentArchivePayload<ExtArgs>
        fields: Prisma.StudentArchiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentArchiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentArchiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload>
          }
          findFirst: {
            args: Prisma.StudentArchiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentArchiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload>
          }
          findMany: {
            args: Prisma.StudentArchiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload>[]
          }
          create: {
            args: Prisma.StudentArchiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload>
          }
          createMany: {
            args: Prisma.StudentArchiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentArchiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload>[]
          }
          delete: {
            args: Prisma.StudentArchiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload>
          }
          update: {
            args: Prisma.StudentArchiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload>
          }
          deleteMany: {
            args: Prisma.StudentArchiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentArchiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentArchiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload>[]
          }
          upsert: {
            args: Prisma.StudentArchiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentArchivePayload>
          }
          aggregate: {
            args: Prisma.StudentArchiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentArchive>
          }
          groupBy: {
            args: Prisma.StudentArchiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentArchiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentArchiveCountArgs<ExtArgs>
            result: $Utils.Optional<StudentArchiveCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    studentParentRelation?: StudentParentRelationOmit
    class?: ClassOmit
    subject?: SubjectOmit
    enrollment?: EnrollmentOmit
    lesson?: LessonOmit
    assignment?: AssignmentOmit
    exam?: ExamOmit
    attendance?: AttendanceOmit
    studentArchive?: StudentArchiveOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    taughtClasses: number
    taughtSubjects: number
    assignments: number
    exams: number
    attendances: number
    enrollments: number
    children: number
    parents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taughtClasses?: boolean | UserCountOutputTypeCountTaughtClassesArgs
    taughtSubjects?: boolean | UserCountOutputTypeCountTaughtSubjectsArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    exams?: boolean | UserCountOutputTypeCountExamsArgs
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    children?: boolean | UserCountOutputTypeCountChildrenArgs
    parents?: boolean | UserCountOutputTypeCountParentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaughtClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaughtSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentParentRelationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentParentRelationWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    subjects: number
    enrollments: number
    attendances: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | ClassCountOutputTypeCountSubjectsArgs
    enrollments?: boolean | ClassCountOutputTypeCountEnrollmentsArgs
    attendances?: boolean | ClassCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    lessons: number
    assignments: number
    exams: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | SubjectCountOutputTypeCountLessonsArgs
    assignments?: boolean | SubjectCountOutputTypeCountAssignmentsArgs
    exams?: boolean | SubjectCountOutputTypeCountExamsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    lastName: string | null
    firstName: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    email: string | null
    phone: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    lastName: string | null
    firstName: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    email: string | null
    phone: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    lastName: number
    firstName: number
    gender: number
    birthDate: number
    email: number
    phone: number
    username: number
    passwordHash: number
    role: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    lastName?: true
    firstName?: true
    gender?: true
    birthDate?: true
    email?: true
    phone?: true
    username?: true
    passwordHash?: true
    role?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    lastName?: true
    firstName?: true
    gender?: true
    birthDate?: true
    email?: true
    phone?: true
    username?: true
    passwordHash?: true
    role?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    lastName?: true
    firstName?: true
    gender?: true
    birthDate?: true
    email?: true
    phone?: true
    username?: true
    passwordHash?: true
    role?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date
    email: string | null
    phone: string | null
    username: string | null
    passwordHash: string
    role: $Enums.UserRole
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taughtClasses?: boolean | User$taughtClassesArgs<ExtArgs>
    taughtSubjects?: boolean | User$taughtSubjectsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    exams?: boolean | User$examsArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    parents?: boolean | User$parentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastName" | "firstName" | "gender" | "birthDate" | "email" | "phone" | "username" | "passwordHash" | "role" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taughtClasses?: boolean | User$taughtClassesArgs<ExtArgs>
    taughtSubjects?: boolean | User$taughtSubjectsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    exams?: boolean | User$examsArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    parents?: boolean | User$parentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      taughtClasses: Prisma.$ClassPayload<ExtArgs>[]
      taughtSubjects: Prisma.$SubjectPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      exams: Prisma.$ExamPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      children: Prisma.$StudentParentRelationPayload<ExtArgs>[]
      parents: Prisma.$StudentParentRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastName: string
      firstName: string
      gender: $Enums.Gender
      birthDate: Date
      email: string | null
      phone: string | null
      username: string | null
      passwordHash: string
      role: $Enums.UserRole
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taughtClasses<T extends User$taughtClassesArgs<ExtArgs> = {}>(args?: Subset<T, User$taughtClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taughtSubjects<T extends User$taughtSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$taughtSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exams<T extends User$examsArgs<ExtArgs> = {}>(args?: Subset<T, User$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends User$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    children<T extends User$childrenArgs<ExtArgs> = {}>(args?: Subset<T, User$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parents<T extends User$parentsArgs<ExtArgs> = {}>(args?: Subset<T, User$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly address: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.taughtClasses
   */
  export type User$taughtClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User.taughtSubjects
   */
  export type User$taughtSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.exams
   */
  export type User$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * User.attendances
   */
  export type User$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.children
   */
  export type User$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    where?: StudentParentRelationWhereInput
    orderBy?: StudentParentRelationOrderByWithRelationInput | StudentParentRelationOrderByWithRelationInput[]
    cursor?: StudentParentRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentParentRelationScalarFieldEnum | StudentParentRelationScalarFieldEnum[]
  }

  /**
   * User.parents
   */
  export type User$parentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    where?: StudentParentRelationWhereInput
    orderBy?: StudentParentRelationOrderByWithRelationInput | StudentParentRelationOrderByWithRelationInput[]
    cursor?: StudentParentRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentParentRelationScalarFieldEnum | StudentParentRelationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StudentParentRelation
   */

  export type AggregateStudentParentRelation = {
    _count: StudentParentRelationCountAggregateOutputType | null
    _min: StudentParentRelationMinAggregateOutputType | null
    _max: StudentParentRelationMaxAggregateOutputType | null
  }

  export type StudentParentRelationMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    parentId: string | null
  }

  export type StudentParentRelationMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    parentId: string | null
  }

  export type StudentParentRelationCountAggregateOutputType = {
    id: number
    studentId: number
    parentId: number
    _all: number
  }


  export type StudentParentRelationMinAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
  }

  export type StudentParentRelationMaxAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
  }

  export type StudentParentRelationCountAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    _all?: true
  }

  export type StudentParentRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentParentRelation to aggregate.
     */
    where?: StudentParentRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentParentRelations to fetch.
     */
    orderBy?: StudentParentRelationOrderByWithRelationInput | StudentParentRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentParentRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentParentRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentParentRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentParentRelations
    **/
    _count?: true | StudentParentRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentParentRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentParentRelationMaxAggregateInputType
  }

  export type GetStudentParentRelationAggregateType<T extends StudentParentRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentParentRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentParentRelation[P]>
      : GetScalarType<T[P], AggregateStudentParentRelation[P]>
  }




  export type StudentParentRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentParentRelationWhereInput
    orderBy?: StudentParentRelationOrderByWithAggregationInput | StudentParentRelationOrderByWithAggregationInput[]
    by: StudentParentRelationScalarFieldEnum[] | StudentParentRelationScalarFieldEnum
    having?: StudentParentRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentParentRelationCountAggregateInputType | true
    _min?: StudentParentRelationMinAggregateInputType
    _max?: StudentParentRelationMaxAggregateInputType
  }

  export type StudentParentRelationGroupByOutputType = {
    id: string
    studentId: string
    parentId: string
    _count: StudentParentRelationCountAggregateOutputType | null
    _min: StudentParentRelationMinAggregateOutputType | null
    _max: StudentParentRelationMaxAggregateOutputType | null
  }

  type GetStudentParentRelationGroupByPayload<T extends StudentParentRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentParentRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentParentRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentParentRelationGroupByOutputType[P]>
            : GetScalarType<T[P], StudentParentRelationGroupByOutputType[P]>
        }
      >
    >


  export type StudentParentRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentParentRelation"]>

  export type StudentParentRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentParentRelation"]>

  export type StudentParentRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentParentRelation"]>

  export type StudentParentRelationSelectScalar = {
    id?: boolean
    studentId?: boolean
    parentId?: boolean
  }

  export type StudentParentRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "parentId", ExtArgs["result"]["studentParentRelation"]>
  export type StudentParentRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentParentRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentParentRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentParentRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentParentRelation"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      parentId: string
    }, ExtArgs["result"]["studentParentRelation"]>
    composites: {}
  }

  type StudentParentRelationGetPayload<S extends boolean | null | undefined | StudentParentRelationDefaultArgs> = $Result.GetResult<Prisma.$StudentParentRelationPayload, S>

  type StudentParentRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentParentRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentParentRelationCountAggregateInputType | true
    }

  export interface StudentParentRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentParentRelation'], meta: { name: 'StudentParentRelation' } }
    /**
     * Find zero or one StudentParentRelation that matches the filter.
     * @param {StudentParentRelationFindUniqueArgs} args - Arguments to find a StudentParentRelation
     * @example
     * // Get one StudentParentRelation
     * const studentParentRelation = await prisma.studentParentRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentParentRelationFindUniqueArgs>(args: SelectSubset<T, StudentParentRelationFindUniqueArgs<ExtArgs>>): Prisma__StudentParentRelationClient<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentParentRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentParentRelationFindUniqueOrThrowArgs} args - Arguments to find a StudentParentRelation
     * @example
     * // Get one StudentParentRelation
     * const studentParentRelation = await prisma.studentParentRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentParentRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentParentRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentParentRelationClient<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentParentRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentRelationFindFirstArgs} args - Arguments to find a StudentParentRelation
     * @example
     * // Get one StudentParentRelation
     * const studentParentRelation = await prisma.studentParentRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentParentRelationFindFirstArgs>(args?: SelectSubset<T, StudentParentRelationFindFirstArgs<ExtArgs>>): Prisma__StudentParentRelationClient<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentParentRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentRelationFindFirstOrThrowArgs} args - Arguments to find a StudentParentRelation
     * @example
     * // Get one StudentParentRelation
     * const studentParentRelation = await prisma.studentParentRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentParentRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentParentRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentParentRelationClient<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentParentRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentParentRelations
     * const studentParentRelations = await prisma.studentParentRelation.findMany()
     * 
     * // Get first 10 StudentParentRelations
     * const studentParentRelations = await prisma.studentParentRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentParentRelationWithIdOnly = await prisma.studentParentRelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentParentRelationFindManyArgs>(args?: SelectSubset<T, StudentParentRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentParentRelation.
     * @param {StudentParentRelationCreateArgs} args - Arguments to create a StudentParentRelation.
     * @example
     * // Create one StudentParentRelation
     * const StudentParentRelation = await prisma.studentParentRelation.create({
     *   data: {
     *     // ... data to create a StudentParentRelation
     *   }
     * })
     * 
     */
    create<T extends StudentParentRelationCreateArgs>(args: SelectSubset<T, StudentParentRelationCreateArgs<ExtArgs>>): Prisma__StudentParentRelationClient<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentParentRelations.
     * @param {StudentParentRelationCreateManyArgs} args - Arguments to create many StudentParentRelations.
     * @example
     * // Create many StudentParentRelations
     * const studentParentRelation = await prisma.studentParentRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentParentRelationCreateManyArgs>(args?: SelectSubset<T, StudentParentRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentParentRelations and returns the data saved in the database.
     * @param {StudentParentRelationCreateManyAndReturnArgs} args - Arguments to create many StudentParentRelations.
     * @example
     * // Create many StudentParentRelations
     * const studentParentRelation = await prisma.studentParentRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentParentRelations and only return the `id`
     * const studentParentRelationWithIdOnly = await prisma.studentParentRelation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentParentRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentParentRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentParentRelation.
     * @param {StudentParentRelationDeleteArgs} args - Arguments to delete one StudentParentRelation.
     * @example
     * // Delete one StudentParentRelation
     * const StudentParentRelation = await prisma.studentParentRelation.delete({
     *   where: {
     *     // ... filter to delete one StudentParentRelation
     *   }
     * })
     * 
     */
    delete<T extends StudentParentRelationDeleteArgs>(args: SelectSubset<T, StudentParentRelationDeleteArgs<ExtArgs>>): Prisma__StudentParentRelationClient<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentParentRelation.
     * @param {StudentParentRelationUpdateArgs} args - Arguments to update one StudentParentRelation.
     * @example
     * // Update one StudentParentRelation
     * const studentParentRelation = await prisma.studentParentRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentParentRelationUpdateArgs>(args: SelectSubset<T, StudentParentRelationUpdateArgs<ExtArgs>>): Prisma__StudentParentRelationClient<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentParentRelations.
     * @param {StudentParentRelationDeleteManyArgs} args - Arguments to filter StudentParentRelations to delete.
     * @example
     * // Delete a few StudentParentRelations
     * const { count } = await prisma.studentParentRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentParentRelationDeleteManyArgs>(args?: SelectSubset<T, StudentParentRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentParentRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentParentRelations
     * const studentParentRelation = await prisma.studentParentRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentParentRelationUpdateManyArgs>(args: SelectSubset<T, StudentParentRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentParentRelations and returns the data updated in the database.
     * @param {StudentParentRelationUpdateManyAndReturnArgs} args - Arguments to update many StudentParentRelations.
     * @example
     * // Update many StudentParentRelations
     * const studentParentRelation = await prisma.studentParentRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentParentRelations and only return the `id`
     * const studentParentRelationWithIdOnly = await prisma.studentParentRelation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentParentRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentParentRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentParentRelation.
     * @param {StudentParentRelationUpsertArgs} args - Arguments to update or create a StudentParentRelation.
     * @example
     * // Update or create a StudentParentRelation
     * const studentParentRelation = await prisma.studentParentRelation.upsert({
     *   create: {
     *     // ... data to create a StudentParentRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentParentRelation we want to update
     *   }
     * })
     */
    upsert<T extends StudentParentRelationUpsertArgs>(args: SelectSubset<T, StudentParentRelationUpsertArgs<ExtArgs>>): Prisma__StudentParentRelationClient<$Result.GetResult<Prisma.$StudentParentRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentParentRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentRelationCountArgs} args - Arguments to filter StudentParentRelations to count.
     * @example
     * // Count the number of StudentParentRelations
     * const count = await prisma.studentParentRelation.count({
     *   where: {
     *     // ... the filter for the StudentParentRelations we want to count
     *   }
     * })
    **/
    count<T extends StudentParentRelationCountArgs>(
      args?: Subset<T, StudentParentRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentParentRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentParentRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentParentRelationAggregateArgs>(args: Subset<T, StudentParentRelationAggregateArgs>): Prisma.PrismaPromise<GetStudentParentRelationAggregateType<T>>

    /**
     * Group by StudentParentRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentParentRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentParentRelationGroupByArgs['orderBy'] }
        : { orderBy?: StudentParentRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentParentRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentParentRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentParentRelation model
   */
  readonly fields: StudentParentRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentParentRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentParentRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentParentRelation model
   */
  interface StudentParentRelationFieldRefs {
    readonly id: FieldRef<"StudentParentRelation", 'String'>
    readonly studentId: FieldRef<"StudentParentRelation", 'String'>
    readonly parentId: FieldRef<"StudentParentRelation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentParentRelation findUnique
   */
  export type StudentParentRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    /**
     * Filter, which StudentParentRelation to fetch.
     */
    where: StudentParentRelationWhereUniqueInput
  }

  /**
   * StudentParentRelation findUniqueOrThrow
   */
  export type StudentParentRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    /**
     * Filter, which StudentParentRelation to fetch.
     */
    where: StudentParentRelationWhereUniqueInput
  }

  /**
   * StudentParentRelation findFirst
   */
  export type StudentParentRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    /**
     * Filter, which StudentParentRelation to fetch.
     */
    where?: StudentParentRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentParentRelations to fetch.
     */
    orderBy?: StudentParentRelationOrderByWithRelationInput | StudentParentRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentParentRelations.
     */
    cursor?: StudentParentRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentParentRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentParentRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentParentRelations.
     */
    distinct?: StudentParentRelationScalarFieldEnum | StudentParentRelationScalarFieldEnum[]
  }

  /**
   * StudentParentRelation findFirstOrThrow
   */
  export type StudentParentRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    /**
     * Filter, which StudentParentRelation to fetch.
     */
    where?: StudentParentRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentParentRelations to fetch.
     */
    orderBy?: StudentParentRelationOrderByWithRelationInput | StudentParentRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentParentRelations.
     */
    cursor?: StudentParentRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentParentRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentParentRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentParentRelations.
     */
    distinct?: StudentParentRelationScalarFieldEnum | StudentParentRelationScalarFieldEnum[]
  }

  /**
   * StudentParentRelation findMany
   */
  export type StudentParentRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    /**
     * Filter, which StudentParentRelations to fetch.
     */
    where?: StudentParentRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentParentRelations to fetch.
     */
    orderBy?: StudentParentRelationOrderByWithRelationInput | StudentParentRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentParentRelations.
     */
    cursor?: StudentParentRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentParentRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentParentRelations.
     */
    skip?: number
    distinct?: StudentParentRelationScalarFieldEnum | StudentParentRelationScalarFieldEnum[]
  }

  /**
   * StudentParentRelation create
   */
  export type StudentParentRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentParentRelation.
     */
    data: XOR<StudentParentRelationCreateInput, StudentParentRelationUncheckedCreateInput>
  }

  /**
   * StudentParentRelation createMany
   */
  export type StudentParentRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentParentRelations.
     */
    data: StudentParentRelationCreateManyInput | StudentParentRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentParentRelation createManyAndReturn
   */
  export type StudentParentRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * The data used to create many StudentParentRelations.
     */
    data: StudentParentRelationCreateManyInput | StudentParentRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentParentRelation update
   */
  export type StudentParentRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentParentRelation.
     */
    data: XOR<StudentParentRelationUpdateInput, StudentParentRelationUncheckedUpdateInput>
    /**
     * Choose, which StudentParentRelation to update.
     */
    where: StudentParentRelationWhereUniqueInput
  }

  /**
   * StudentParentRelation updateMany
   */
  export type StudentParentRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentParentRelations.
     */
    data: XOR<StudentParentRelationUpdateManyMutationInput, StudentParentRelationUncheckedUpdateManyInput>
    /**
     * Filter which StudentParentRelations to update
     */
    where?: StudentParentRelationWhereInput
    /**
     * Limit how many StudentParentRelations to update.
     */
    limit?: number
  }

  /**
   * StudentParentRelation updateManyAndReturn
   */
  export type StudentParentRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * The data used to update StudentParentRelations.
     */
    data: XOR<StudentParentRelationUpdateManyMutationInput, StudentParentRelationUncheckedUpdateManyInput>
    /**
     * Filter which StudentParentRelations to update
     */
    where?: StudentParentRelationWhereInput
    /**
     * Limit how many StudentParentRelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentParentRelation upsert
   */
  export type StudentParentRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentParentRelation to update in case it exists.
     */
    where: StudentParentRelationWhereUniqueInput
    /**
     * In case the StudentParentRelation found by the `where` argument doesn't exist, create a new StudentParentRelation with this data.
     */
    create: XOR<StudentParentRelationCreateInput, StudentParentRelationUncheckedCreateInput>
    /**
     * In case the StudentParentRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentParentRelationUpdateInput, StudentParentRelationUncheckedUpdateInput>
  }

  /**
   * StudentParentRelation delete
   */
  export type StudentParentRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
    /**
     * Filter which StudentParentRelation to delete.
     */
    where: StudentParentRelationWhereUniqueInput
  }

  /**
   * StudentParentRelation deleteMany
   */
  export type StudentParentRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentParentRelations to delete
     */
    where?: StudentParentRelationWhereInput
    /**
     * Limit how many StudentParentRelations to delete.
     */
    limit?: number
  }

  /**
   * StudentParentRelation without action
   */
  export type StudentParentRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParentRelation
     */
    select?: StudentParentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParentRelation
     */
    omit?: StudentParentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentRelationInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    name: string | null
    gradeLevel: string | null
    academicYear: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gradeLevel: string | null
    academicYear: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    gradeLevel: number
    academicYear: number
    teacherId: number
    createdAt: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    gradeLevel?: true
    academicYear?: true
    teacherId?: true
    createdAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    gradeLevel?: true
    academicYear?: true
    teacherId?: true
    createdAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    gradeLevel?: true
    academicYear?: true
    teacherId?: true
    createdAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    name: string
    gradeLevel: string
    academicYear: string
    teacherId: string
    createdAt: Date
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gradeLevel?: boolean
    academicYear?: boolean
    teacherId?: boolean
    createdAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    subjects?: boolean | Class$subjectsArgs<ExtArgs>
    enrollments?: boolean | Class$enrollmentsArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gradeLevel?: boolean
    academicYear?: boolean
    teacherId?: boolean
    createdAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gradeLevel?: boolean
    academicYear?: boolean
    teacherId?: boolean
    createdAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    gradeLevel?: boolean
    academicYear?: boolean
    teacherId?: boolean
    createdAt?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gradeLevel" | "academicYear" | "teacherId" | "createdAt", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    subjects?: boolean | Class$subjectsArgs<ExtArgs>
    enrollments?: boolean | Class$enrollmentsArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gradeLevel: string
      academicYear: string
      teacherId: string
      createdAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends Class$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Class$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Class$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends Class$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Class$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly gradeLevel: FieldRef<"Class", 'String'>
    readonly academicYear: FieldRef<"Class", 'String'>
    readonly teacherId: FieldRef<"Class", 'String'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.subjects
   */
  export type Class$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Class.enrollments
   */
  export type Class$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Class.attendances
   */
  export type Class$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    classId: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    classId: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    classId: number
    teacherId: number
    createdAt: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    classId?: true
    teacherId?: true
    createdAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    classId?: true
    teacherId?: true
    createdAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    classId?: true
    teacherId?: true
    createdAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    classId: string
    teacherId: string
    createdAt: Date
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    classId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    lessons?: boolean | Subject$lessonsArgs<ExtArgs>
    assignments?: boolean | Subject$assignmentsArgs<ExtArgs>
    exams?: boolean | Subject$examsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    classId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    classId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    classId?: boolean
    teacherId?: boolean
    createdAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "classId" | "teacherId" | "createdAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    lessons?: boolean | Subject$lessonsArgs<ExtArgs>
    assignments?: boolean | Subject$assignmentsArgs<ExtArgs>
    exams?: boolean | Subject$examsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      exams: Prisma.$ExamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      classId: string
      teacherId: string
      createdAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Subject$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Subject$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exams<T extends Subject$examsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly description: FieldRef<"Subject", 'String'>
    readonly classId: FieldRef<"Subject", 'String'>
    readonly teacherId: FieldRef<"Subject", 'String'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.lessons
   */
  export type Subject$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Subject.assignments
   */
  export type Subject$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Subject.exams
   */
  export type Subject$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    classId: string | null
    studentId: string | null
    enrolledAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    studentId: string | null
    enrolledAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    classId: number
    studentId: number
    enrolledAt: number
    _all: number
  }


  export type EnrollmentMinAggregateInputType = {
    id?: true
    classId?: true
    studentId?: true
    enrolledAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    classId?: true
    studentId?: true
    enrolledAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    classId?: true
    studentId?: true
    enrolledAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    classId: string
    studentId: string
    enrolledAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    studentId?: boolean
    enrolledAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    studentId?: boolean
    enrolledAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    studentId?: boolean
    enrolledAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    classId?: boolean
    studentId?: boolean
    enrolledAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "studentId" | "enrolledAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classId: string
      studentId: string
      enrolledAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly classId: FieldRef<"Enrollment", 'String'>
    readonly studentId: FieldRef<"Enrollment", 'String'>
    readonly enrolledAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    subjectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    subjectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    content: number
    subjectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    subjectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    subjectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    subjectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    title: string
    content: string
    subjectId: string
    createdAt: Date
    updatedAt: Date
    _count: LessonCountAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    subjectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    subjectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    subjectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    subjectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "subjectId" | "createdAt" | "updatedAt", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      subjectId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly content: FieldRef<"Lesson", 'String'>
    readonly subjectId: FieldRef<"Lesson", 'String'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
    readonly updatedAt: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    subjectId: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    subjectId: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    subjectId: number
    teacherId: number
    createdAt: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    subjectId?: true
    teacherId?: true
    createdAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    subjectId?: true
    teacherId?: true
    createdAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    subjectId?: true
    teacherId?: true
    createdAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    title: string
    description: string
    dueDate: Date
    subjectId: string
    teacherId: string
    createdAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    subjectId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    subjectId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    subjectId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    subjectId?: boolean
    teacherId?: boolean
    createdAt?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "subjectId" | "teacherId" | "createdAt", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      dueDate: Date
      subjectId: string
      teacherId: string
      createdAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly dueDate: FieldRef<"Assignment", 'DateTime'>
    readonly subjectId: FieldRef<"Assignment", 'String'>
    readonly teacherId: FieldRef<"Assignment", 'String'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    examDate: Date | null
    subjectId: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    examDate: Date | null
    subjectId: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    description: number
    examDate: number
    subjectId: number
    teacherId: number
    createdAt: number
    _all: number
  }


  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    examDate?: true
    subjectId?: true
    teacherId?: true
    createdAt?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    examDate?: true
    subjectId?: true
    teacherId?: true
    createdAt?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    examDate?: true
    subjectId?: true
    teacherId?: true
    createdAt?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    title: string
    description: string
    examDate: Date
    subjectId: string
    teacherId: string
    createdAt: Date
    _count: ExamCountAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    examDate?: boolean
    subjectId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    examDate?: boolean
    subjectId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    examDate?: boolean
    subjectId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    examDate?: boolean
    subjectId?: boolean
    teacherId?: boolean
    createdAt?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "examDate" | "subjectId" | "teacherId" | "createdAt", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      examDate: Date
      subjectId: string
      teacherId: string
      createdAt: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam model
   */
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly description: FieldRef<"Exam", 'String'>
    readonly examDate: FieldRef<"Exam", 'DateTime'>
    readonly subjectId: FieldRef<"Exam", 'String'>
    readonly teacherId: FieldRef<"Exam", 'String'>
    readonly createdAt: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam updateManyAndReturn
   */
  export type ExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    classId: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    classId: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    classId: number
    date: number
    status: number
    notes: number
    createdAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    classId?: true
    date?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    classId?: true
    date?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    classId?: true
    date?: true
    status?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    studentId: string
    classId: string
    date: Date
    status: $Enums.AttendanceStatus
    notes: string | null
    createdAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    classId?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    classId?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    classId?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    classId?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "classId" | "date" | "status" | "notes" | "createdAt", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      classId: string
      date: Date
      status: $Enums.AttendanceStatus
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly studentId: FieldRef<"Attendance", 'String'>
    readonly classId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly notes: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model StudentArchive
   */

  export type AggregateStudentArchive = {
    _count: StudentArchiveCountAggregateOutputType | null
    _min: StudentArchiveMinAggregateOutputType | null
    _max: StudentArchiveMaxAggregateOutputType | null
  }

  export type StudentArchiveMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    lastName: string | null
    firstName: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    email: string | null
    phone: string | null
    username: string | null
    address: string | null
    className: string | null
    gradeLevel: string | null
    academicYear: string | null
    teacherLastName: string | null
    teacherFirstName: string | null
    reportCardUrl: string | null
    notes: string | null
    archivedAt: Date | null
  }

  export type StudentArchiveMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    lastName: string | null
    firstName: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    email: string | null
    phone: string | null
    username: string | null
    address: string | null
    className: string | null
    gradeLevel: string | null
    academicYear: string | null
    teacherLastName: string | null
    teacherFirstName: string | null
    reportCardUrl: string | null
    notes: string | null
    archivedAt: Date | null
  }

  export type StudentArchiveCountAggregateOutputType = {
    id: number
    studentId: number
    lastName: number
    firstName: number
    gender: number
    birthDate: number
    email: number
    phone: number
    username: number
    address: number
    className: number
    gradeLevel: number
    academicYear: number
    teacherLastName: number
    teacherFirstName: number
    parentsInfo: number
    reportCardUrl: number
    notes: number
    metadata: number
    archivedAt: number
    _all: number
  }


  export type StudentArchiveMinAggregateInputType = {
    id?: true
    studentId?: true
    lastName?: true
    firstName?: true
    gender?: true
    birthDate?: true
    email?: true
    phone?: true
    username?: true
    address?: true
    className?: true
    gradeLevel?: true
    academicYear?: true
    teacherLastName?: true
    teacherFirstName?: true
    reportCardUrl?: true
    notes?: true
    archivedAt?: true
  }

  export type StudentArchiveMaxAggregateInputType = {
    id?: true
    studentId?: true
    lastName?: true
    firstName?: true
    gender?: true
    birthDate?: true
    email?: true
    phone?: true
    username?: true
    address?: true
    className?: true
    gradeLevel?: true
    academicYear?: true
    teacherLastName?: true
    teacherFirstName?: true
    reportCardUrl?: true
    notes?: true
    archivedAt?: true
  }

  export type StudentArchiveCountAggregateInputType = {
    id?: true
    studentId?: true
    lastName?: true
    firstName?: true
    gender?: true
    birthDate?: true
    email?: true
    phone?: true
    username?: true
    address?: true
    className?: true
    gradeLevel?: true
    academicYear?: true
    teacherLastName?: true
    teacherFirstName?: true
    parentsInfo?: true
    reportCardUrl?: true
    notes?: true
    metadata?: true
    archivedAt?: true
    _all?: true
  }

  export type StudentArchiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentArchive to aggregate.
     */
    where?: StudentArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentArchives to fetch.
     */
    orderBy?: StudentArchiveOrderByWithRelationInput | StudentArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentArchives
    **/
    _count?: true | StudentArchiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentArchiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentArchiveMaxAggregateInputType
  }

  export type GetStudentArchiveAggregateType<T extends StudentArchiveAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentArchive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentArchive[P]>
      : GetScalarType<T[P], AggregateStudentArchive[P]>
  }




  export type StudentArchiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentArchiveWhereInput
    orderBy?: StudentArchiveOrderByWithAggregationInput | StudentArchiveOrderByWithAggregationInput[]
    by: StudentArchiveScalarFieldEnum[] | StudentArchiveScalarFieldEnum
    having?: StudentArchiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentArchiveCountAggregateInputType | true
    _min?: StudentArchiveMinAggregateInputType
    _max?: StudentArchiveMaxAggregateInputType
  }

  export type StudentArchiveGroupByOutputType = {
    id: string
    studentId: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date
    email: string | null
    phone: string | null
    username: string | null
    address: string | null
    className: string
    gradeLevel: string
    academicYear: string
    teacherLastName: string
    teacherFirstName: string
    parentsInfo: JsonValue
    reportCardUrl: string
    notes: string | null
    metadata: JsonValue | null
    archivedAt: Date
    _count: StudentArchiveCountAggregateOutputType | null
    _min: StudentArchiveMinAggregateOutputType | null
    _max: StudentArchiveMaxAggregateOutputType | null
  }

  type GetStudentArchiveGroupByPayload<T extends StudentArchiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentArchiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentArchiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentArchiveGroupByOutputType[P]>
            : GetScalarType<T[P], StudentArchiveGroupByOutputType[P]>
        }
      >
    >


  export type StudentArchiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    address?: boolean
    className?: boolean
    gradeLevel?: boolean
    academicYear?: boolean
    teacherLastName?: boolean
    teacherFirstName?: boolean
    parentsInfo?: boolean
    reportCardUrl?: boolean
    notes?: boolean
    metadata?: boolean
    archivedAt?: boolean
  }, ExtArgs["result"]["studentArchive"]>

  export type StudentArchiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    address?: boolean
    className?: boolean
    gradeLevel?: boolean
    academicYear?: boolean
    teacherLastName?: boolean
    teacherFirstName?: boolean
    parentsInfo?: boolean
    reportCardUrl?: boolean
    notes?: boolean
    metadata?: boolean
    archivedAt?: boolean
  }, ExtArgs["result"]["studentArchive"]>

  export type StudentArchiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    address?: boolean
    className?: boolean
    gradeLevel?: boolean
    academicYear?: boolean
    teacherLastName?: boolean
    teacherFirstName?: boolean
    parentsInfo?: boolean
    reportCardUrl?: boolean
    notes?: boolean
    metadata?: boolean
    archivedAt?: boolean
  }, ExtArgs["result"]["studentArchive"]>

  export type StudentArchiveSelectScalar = {
    id?: boolean
    studentId?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    address?: boolean
    className?: boolean
    gradeLevel?: boolean
    academicYear?: boolean
    teacherLastName?: boolean
    teacherFirstName?: boolean
    parentsInfo?: boolean
    reportCardUrl?: boolean
    notes?: boolean
    metadata?: boolean
    archivedAt?: boolean
  }

  export type StudentArchiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "lastName" | "firstName" | "gender" | "birthDate" | "email" | "phone" | "username" | "address" | "className" | "gradeLevel" | "academicYear" | "teacherLastName" | "teacherFirstName" | "parentsInfo" | "reportCardUrl" | "notes" | "metadata" | "archivedAt", ExtArgs["result"]["studentArchive"]>

  export type $StudentArchivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentArchive"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      lastName: string
      firstName: string
      gender: $Enums.Gender
      birthDate: Date
      email: string | null
      phone: string | null
      username: string | null
      address: string | null
      className: string
      gradeLevel: string
      academicYear: string
      teacherLastName: string
      teacherFirstName: string
      parentsInfo: Prisma.JsonValue
      reportCardUrl: string
      notes: string | null
      metadata: Prisma.JsonValue | null
      archivedAt: Date
    }, ExtArgs["result"]["studentArchive"]>
    composites: {}
  }

  type StudentArchiveGetPayload<S extends boolean | null | undefined | StudentArchiveDefaultArgs> = $Result.GetResult<Prisma.$StudentArchivePayload, S>

  type StudentArchiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentArchiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentArchiveCountAggregateInputType | true
    }

  export interface StudentArchiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentArchive'], meta: { name: 'StudentArchive' } }
    /**
     * Find zero or one StudentArchive that matches the filter.
     * @param {StudentArchiveFindUniqueArgs} args - Arguments to find a StudentArchive
     * @example
     * // Get one StudentArchive
     * const studentArchive = await prisma.studentArchive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentArchiveFindUniqueArgs>(args: SelectSubset<T, StudentArchiveFindUniqueArgs<ExtArgs>>): Prisma__StudentArchiveClient<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentArchive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentArchiveFindUniqueOrThrowArgs} args - Arguments to find a StudentArchive
     * @example
     * // Get one StudentArchive
     * const studentArchive = await prisma.studentArchive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentArchiveFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentArchiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentArchiveClient<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentArchive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentArchiveFindFirstArgs} args - Arguments to find a StudentArchive
     * @example
     * // Get one StudentArchive
     * const studentArchive = await prisma.studentArchive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentArchiveFindFirstArgs>(args?: SelectSubset<T, StudentArchiveFindFirstArgs<ExtArgs>>): Prisma__StudentArchiveClient<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentArchive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentArchiveFindFirstOrThrowArgs} args - Arguments to find a StudentArchive
     * @example
     * // Get one StudentArchive
     * const studentArchive = await prisma.studentArchive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentArchiveFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentArchiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentArchiveClient<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentArchives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentArchiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentArchives
     * const studentArchives = await prisma.studentArchive.findMany()
     * 
     * // Get first 10 StudentArchives
     * const studentArchives = await prisma.studentArchive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentArchiveWithIdOnly = await prisma.studentArchive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentArchiveFindManyArgs>(args?: SelectSubset<T, StudentArchiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentArchive.
     * @param {StudentArchiveCreateArgs} args - Arguments to create a StudentArchive.
     * @example
     * // Create one StudentArchive
     * const StudentArchive = await prisma.studentArchive.create({
     *   data: {
     *     // ... data to create a StudentArchive
     *   }
     * })
     * 
     */
    create<T extends StudentArchiveCreateArgs>(args: SelectSubset<T, StudentArchiveCreateArgs<ExtArgs>>): Prisma__StudentArchiveClient<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentArchives.
     * @param {StudentArchiveCreateManyArgs} args - Arguments to create many StudentArchives.
     * @example
     * // Create many StudentArchives
     * const studentArchive = await prisma.studentArchive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentArchiveCreateManyArgs>(args?: SelectSubset<T, StudentArchiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentArchives and returns the data saved in the database.
     * @param {StudentArchiveCreateManyAndReturnArgs} args - Arguments to create many StudentArchives.
     * @example
     * // Create many StudentArchives
     * const studentArchive = await prisma.studentArchive.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentArchives and only return the `id`
     * const studentArchiveWithIdOnly = await prisma.studentArchive.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentArchiveCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentArchiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentArchive.
     * @param {StudentArchiveDeleteArgs} args - Arguments to delete one StudentArchive.
     * @example
     * // Delete one StudentArchive
     * const StudentArchive = await prisma.studentArchive.delete({
     *   where: {
     *     // ... filter to delete one StudentArchive
     *   }
     * })
     * 
     */
    delete<T extends StudentArchiveDeleteArgs>(args: SelectSubset<T, StudentArchiveDeleteArgs<ExtArgs>>): Prisma__StudentArchiveClient<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentArchive.
     * @param {StudentArchiveUpdateArgs} args - Arguments to update one StudentArchive.
     * @example
     * // Update one StudentArchive
     * const studentArchive = await prisma.studentArchive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentArchiveUpdateArgs>(args: SelectSubset<T, StudentArchiveUpdateArgs<ExtArgs>>): Prisma__StudentArchiveClient<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentArchives.
     * @param {StudentArchiveDeleteManyArgs} args - Arguments to filter StudentArchives to delete.
     * @example
     * // Delete a few StudentArchives
     * const { count } = await prisma.studentArchive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentArchiveDeleteManyArgs>(args?: SelectSubset<T, StudentArchiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentArchives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentArchiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentArchives
     * const studentArchive = await prisma.studentArchive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentArchiveUpdateManyArgs>(args: SelectSubset<T, StudentArchiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentArchives and returns the data updated in the database.
     * @param {StudentArchiveUpdateManyAndReturnArgs} args - Arguments to update many StudentArchives.
     * @example
     * // Update many StudentArchives
     * const studentArchive = await prisma.studentArchive.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentArchives and only return the `id`
     * const studentArchiveWithIdOnly = await prisma.studentArchive.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentArchiveUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentArchiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentArchive.
     * @param {StudentArchiveUpsertArgs} args - Arguments to update or create a StudentArchive.
     * @example
     * // Update or create a StudentArchive
     * const studentArchive = await prisma.studentArchive.upsert({
     *   create: {
     *     // ... data to create a StudentArchive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentArchive we want to update
     *   }
     * })
     */
    upsert<T extends StudentArchiveUpsertArgs>(args: SelectSubset<T, StudentArchiveUpsertArgs<ExtArgs>>): Prisma__StudentArchiveClient<$Result.GetResult<Prisma.$StudentArchivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentArchives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentArchiveCountArgs} args - Arguments to filter StudentArchives to count.
     * @example
     * // Count the number of StudentArchives
     * const count = await prisma.studentArchive.count({
     *   where: {
     *     // ... the filter for the StudentArchives we want to count
     *   }
     * })
    **/
    count<T extends StudentArchiveCountArgs>(
      args?: Subset<T, StudentArchiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentArchiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentArchive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentArchiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentArchiveAggregateArgs>(args: Subset<T, StudentArchiveAggregateArgs>): Prisma.PrismaPromise<GetStudentArchiveAggregateType<T>>

    /**
     * Group by StudentArchive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentArchiveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentArchiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentArchiveGroupByArgs['orderBy'] }
        : { orderBy?: StudentArchiveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentArchiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentArchiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentArchive model
   */
  readonly fields: StudentArchiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentArchive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentArchiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentArchive model
   */
  interface StudentArchiveFieldRefs {
    readonly id: FieldRef<"StudentArchive", 'String'>
    readonly studentId: FieldRef<"StudentArchive", 'String'>
    readonly lastName: FieldRef<"StudentArchive", 'String'>
    readonly firstName: FieldRef<"StudentArchive", 'String'>
    readonly gender: FieldRef<"StudentArchive", 'Gender'>
    readonly birthDate: FieldRef<"StudentArchive", 'DateTime'>
    readonly email: FieldRef<"StudentArchive", 'String'>
    readonly phone: FieldRef<"StudentArchive", 'String'>
    readonly username: FieldRef<"StudentArchive", 'String'>
    readonly address: FieldRef<"StudentArchive", 'String'>
    readonly className: FieldRef<"StudentArchive", 'String'>
    readonly gradeLevel: FieldRef<"StudentArchive", 'String'>
    readonly academicYear: FieldRef<"StudentArchive", 'String'>
    readonly teacherLastName: FieldRef<"StudentArchive", 'String'>
    readonly teacherFirstName: FieldRef<"StudentArchive", 'String'>
    readonly parentsInfo: FieldRef<"StudentArchive", 'Json'>
    readonly reportCardUrl: FieldRef<"StudentArchive", 'String'>
    readonly notes: FieldRef<"StudentArchive", 'String'>
    readonly metadata: FieldRef<"StudentArchive", 'Json'>
    readonly archivedAt: FieldRef<"StudentArchive", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentArchive findUnique
   */
  export type StudentArchiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * Filter, which StudentArchive to fetch.
     */
    where: StudentArchiveWhereUniqueInput
  }

  /**
   * StudentArchive findUniqueOrThrow
   */
  export type StudentArchiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * Filter, which StudentArchive to fetch.
     */
    where: StudentArchiveWhereUniqueInput
  }

  /**
   * StudentArchive findFirst
   */
  export type StudentArchiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * Filter, which StudentArchive to fetch.
     */
    where?: StudentArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentArchives to fetch.
     */
    orderBy?: StudentArchiveOrderByWithRelationInput | StudentArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentArchives.
     */
    cursor?: StudentArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentArchives.
     */
    distinct?: StudentArchiveScalarFieldEnum | StudentArchiveScalarFieldEnum[]
  }

  /**
   * StudentArchive findFirstOrThrow
   */
  export type StudentArchiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * Filter, which StudentArchive to fetch.
     */
    where?: StudentArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentArchives to fetch.
     */
    orderBy?: StudentArchiveOrderByWithRelationInput | StudentArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentArchives.
     */
    cursor?: StudentArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentArchives.
     */
    distinct?: StudentArchiveScalarFieldEnum | StudentArchiveScalarFieldEnum[]
  }

  /**
   * StudentArchive findMany
   */
  export type StudentArchiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * Filter, which StudentArchives to fetch.
     */
    where?: StudentArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentArchives to fetch.
     */
    orderBy?: StudentArchiveOrderByWithRelationInput | StudentArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentArchives.
     */
    cursor?: StudentArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentArchives.
     */
    skip?: number
    distinct?: StudentArchiveScalarFieldEnum | StudentArchiveScalarFieldEnum[]
  }

  /**
   * StudentArchive create
   */
  export type StudentArchiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * The data needed to create a StudentArchive.
     */
    data: XOR<StudentArchiveCreateInput, StudentArchiveUncheckedCreateInput>
  }

  /**
   * StudentArchive createMany
   */
  export type StudentArchiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentArchives.
     */
    data: StudentArchiveCreateManyInput | StudentArchiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentArchive createManyAndReturn
   */
  export type StudentArchiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * The data used to create many StudentArchives.
     */
    data: StudentArchiveCreateManyInput | StudentArchiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentArchive update
   */
  export type StudentArchiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * The data needed to update a StudentArchive.
     */
    data: XOR<StudentArchiveUpdateInput, StudentArchiveUncheckedUpdateInput>
    /**
     * Choose, which StudentArchive to update.
     */
    where: StudentArchiveWhereUniqueInput
  }

  /**
   * StudentArchive updateMany
   */
  export type StudentArchiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentArchives.
     */
    data: XOR<StudentArchiveUpdateManyMutationInput, StudentArchiveUncheckedUpdateManyInput>
    /**
     * Filter which StudentArchives to update
     */
    where?: StudentArchiveWhereInput
    /**
     * Limit how many StudentArchives to update.
     */
    limit?: number
  }

  /**
   * StudentArchive updateManyAndReturn
   */
  export type StudentArchiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * The data used to update StudentArchives.
     */
    data: XOR<StudentArchiveUpdateManyMutationInput, StudentArchiveUncheckedUpdateManyInput>
    /**
     * Filter which StudentArchives to update
     */
    where?: StudentArchiveWhereInput
    /**
     * Limit how many StudentArchives to update.
     */
    limit?: number
  }

  /**
   * StudentArchive upsert
   */
  export type StudentArchiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * The filter to search for the StudentArchive to update in case it exists.
     */
    where: StudentArchiveWhereUniqueInput
    /**
     * In case the StudentArchive found by the `where` argument doesn't exist, create a new StudentArchive with this data.
     */
    create: XOR<StudentArchiveCreateInput, StudentArchiveUncheckedCreateInput>
    /**
     * In case the StudentArchive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentArchiveUpdateInput, StudentArchiveUncheckedUpdateInput>
  }

  /**
   * StudentArchive delete
   */
  export type StudentArchiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
    /**
     * Filter which StudentArchive to delete.
     */
    where: StudentArchiveWhereUniqueInput
  }

  /**
   * StudentArchive deleteMany
   */
  export type StudentArchiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentArchives to delete
     */
    where?: StudentArchiveWhereInput
    /**
     * Limit how many StudentArchives to delete.
     */
    limit?: number
  }

  /**
   * StudentArchive without action
   */
  export type StudentArchiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentArchive
     */
    select?: StudentArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentArchive
     */
    omit?: StudentArchiveOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    lastName: 'lastName',
    firstName: 'firstName',
    gender: 'gender',
    birthDate: 'birthDate',
    email: 'email',
    phone: 'phone',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentParentRelationScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    parentId: 'parentId'
  };

  export type StudentParentRelationScalarFieldEnum = (typeof StudentParentRelationScalarFieldEnum)[keyof typeof StudentParentRelationScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gradeLevel: 'gradeLevel',
    academicYear: 'academicYear',
    teacherId: 'teacherId',
    createdAt: 'createdAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    classId: 'classId',
    teacherId: 'teacherId',
    createdAt: 'createdAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    studentId: 'studentId',
    enrolledAt: 'enrolledAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    subjectId: 'subjectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    subjectId: 'subjectId',
    teacherId: 'teacherId',
    createdAt: 'createdAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    examDate: 'examDate',
    subjectId: 'subjectId',
    teacherId: 'teacherId',
    createdAt: 'createdAt'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    classId: 'classId',
    date: 'date',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const StudentArchiveScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    lastName: 'lastName',
    firstName: 'firstName',
    gender: 'gender',
    birthDate: 'birthDate',
    email: 'email',
    phone: 'phone',
    username: 'username',
    address: 'address',
    className: 'className',
    gradeLevel: 'gradeLevel',
    academicYear: 'academicYear',
    teacherLastName: 'teacherLastName',
    teacherFirstName: 'teacherFirstName',
    parentsInfo: 'parentsInfo',
    reportCardUrl: 'reportCardUrl',
    notes: 'notes',
    metadata: 'metadata',
    archivedAt: 'archivedAt'
  };

  export type StudentArchiveScalarFieldEnum = (typeof StudentArchiveScalarFieldEnum)[keyof typeof StudentArchiveScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    birthDate?: DateTimeFilter<"User"> | Date | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    taughtClasses?: ClassListRelationFilter
    taughtSubjects?: SubjectListRelationFilter
    assignments?: AssignmentListRelationFilter
    exams?: ExamListRelationFilter
    attendances?: AttendanceListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    children?: StudentParentRelationListRelationFilter
    parents?: StudentParentRelationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taughtClasses?: ClassOrderByRelationAggregateInput
    taughtSubjects?: SubjectOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    exams?: ExamOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    children?: StudentParentRelationOrderByRelationAggregateInput
    parents?: StudentParentRelationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    lastName?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    birthDate?: DateTimeFilter<"User"> | Date | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    taughtClasses?: ClassListRelationFilter
    taughtSubjects?: SubjectListRelationFilter
    assignments?: AssignmentListRelationFilter
    exams?: ExamListRelationFilter
    attendances?: AttendanceListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    children?: StudentParentRelationListRelationFilter
    parents?: StudentParentRelationListRelationFilter
  }, "id" | "email" | "phone" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    birthDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentParentRelationWhereInput = {
    AND?: StudentParentRelationWhereInput | StudentParentRelationWhereInput[]
    OR?: StudentParentRelationWhereInput[]
    NOT?: StudentParentRelationWhereInput | StudentParentRelationWhereInput[]
    id?: StringFilter<"StudentParentRelation"> | string
    studentId?: StringFilter<"StudentParentRelation"> | string
    parentId?: StringFilter<"StudentParentRelation"> | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentParentRelationOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    student?: UserOrderByWithRelationInput
    parent?: UserOrderByWithRelationInput
  }

  export type StudentParentRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_parentId?: StudentParentRelationStudentIdParentIdCompoundUniqueInput
    AND?: StudentParentRelationWhereInput | StudentParentRelationWhereInput[]
    OR?: StudentParentRelationWhereInput[]
    NOT?: StudentParentRelationWhereInput | StudentParentRelationWhereInput[]
    studentId?: StringFilter<"StudentParentRelation"> | string
    parentId?: StringFilter<"StudentParentRelation"> | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "studentId_parentId">

  export type StudentParentRelationOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    _count?: StudentParentRelationCountOrderByAggregateInput
    _max?: StudentParentRelationMaxOrderByAggregateInput
    _min?: StudentParentRelationMinOrderByAggregateInput
  }

  export type StudentParentRelationScalarWhereWithAggregatesInput = {
    AND?: StudentParentRelationScalarWhereWithAggregatesInput | StudentParentRelationScalarWhereWithAggregatesInput[]
    OR?: StudentParentRelationScalarWhereWithAggregatesInput[]
    NOT?: StudentParentRelationScalarWhereWithAggregatesInput | StudentParentRelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentParentRelation"> | string
    studentId?: StringWithAggregatesFilter<"StudentParentRelation"> | string
    parentId?: StringWithAggregatesFilter<"StudentParentRelation"> | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    gradeLevel?: StringFilter<"Class"> | string
    academicYear?: StringFilter<"Class"> | string
    teacherId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    subjects?: SubjectListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    attendances?: AttendanceListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    subjects?: SubjectOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    gradeLevel?: StringFilter<"Class"> | string
    academicYear?: StringFilter<"Class"> | string
    teacherId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    subjects?: SubjectListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    attendances?: AttendanceListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    gradeLevel?: StringWithAggregatesFilter<"Class"> | string
    academicYear?: StringWithAggregatesFilter<"Class"> | string
    teacherId?: StringWithAggregatesFilter<"Class"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    classId?: StringFilter<"Subject"> | string
    teacherId?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    lessons?: LessonListRelationFilter
    assignments?: AssignmentListRelationFilter
    exams?: ExamListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    exams?: ExamOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    classId?: StringFilter<"Subject"> | string
    teacherId?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    lessons?: LessonListRelationFilter
    assignments?: AssignmentListRelationFilter
    exams?: ExamListRelationFilter
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    description?: StringNullableWithAggregatesFilter<"Subject"> | string | null
    classId?: StringWithAggregatesFilter<"Subject"> | string
    teacherId?: StringWithAggregatesFilter<"Subject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    classId?: StringFilter<"Enrollment"> | string
    studentId?: StringFilter<"Enrollment"> | string
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    enrolledAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    classId_studentId?: EnrollmentClassIdStudentIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    classId?: StringFilter<"Enrollment"> | string
    studentId?: StringFilter<"Enrollment"> | string
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "classId_studentId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    enrolledAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    classId?: StringWithAggregatesFilter<"Enrollment"> | string
    studentId?: StringWithAggregatesFilter<"Enrollment"> | string
    enrolledAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    subjectId?: StringFilter<"Lesson"> | string
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: SubjectOrderByWithRelationInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    subjectId?: StringFilter<"Lesson"> | string
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    title?: StringWithAggregatesFilter<"Lesson"> | string
    content?: StringWithAggregatesFilter<"Lesson"> | string
    subjectId?: StringWithAggregatesFilter<"Lesson"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    subjectId?: StringFilter<"Assignment"> | string
    teacherId?: StringFilter<"Assignment"> | string
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    subjectId?: StringFilter<"Assignment"> | string
    teacherId?: StringFilter<"Assignment"> | string
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    title?: StringWithAggregatesFilter<"Assignment"> | string
    description?: StringWithAggregatesFilter<"Assignment"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    subjectId?: StringWithAggregatesFilter<"Assignment"> | string
    teacherId?: StringWithAggregatesFilter<"Assignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    examDate?: DateTimeFilter<"Exam"> | Date | string
    subjectId?: StringFilter<"Exam"> | string
    teacherId?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    examDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    examDate?: DateTimeFilter<"Exam"> | Date | string
    subjectId?: StringFilter<"Exam"> | string
    teacherId?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    examDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    title?: StringWithAggregatesFilter<"Exam"> | string
    description?: StringWithAggregatesFilter<"Exam"> | string
    examDate?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    subjectId?: StringWithAggregatesFilter<"Exam"> | string
    teacherId?: StringWithAggregatesFilter<"Exam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    classId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    student?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    studentId?: StringFilter<"Attendance"> | string
    classId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    studentId?: StringWithAggregatesFilter<"Attendance"> | string
    classId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type StudentArchiveWhereInput = {
    AND?: StudentArchiveWhereInput | StudentArchiveWhereInput[]
    OR?: StudentArchiveWhereInput[]
    NOT?: StudentArchiveWhereInput | StudentArchiveWhereInput[]
    id?: StringFilter<"StudentArchive"> | string
    studentId?: StringFilter<"StudentArchive"> | string
    lastName?: StringFilter<"StudentArchive"> | string
    firstName?: StringFilter<"StudentArchive"> | string
    gender?: EnumGenderFilter<"StudentArchive"> | $Enums.Gender
    birthDate?: DateTimeFilter<"StudentArchive"> | Date | string
    email?: StringNullableFilter<"StudentArchive"> | string | null
    phone?: StringNullableFilter<"StudentArchive"> | string | null
    username?: StringNullableFilter<"StudentArchive"> | string | null
    address?: StringNullableFilter<"StudentArchive"> | string | null
    className?: StringFilter<"StudentArchive"> | string
    gradeLevel?: StringFilter<"StudentArchive"> | string
    academicYear?: StringFilter<"StudentArchive"> | string
    teacherLastName?: StringFilter<"StudentArchive"> | string
    teacherFirstName?: StringFilter<"StudentArchive"> | string
    parentsInfo?: JsonFilter<"StudentArchive">
    reportCardUrl?: StringFilter<"StudentArchive"> | string
    notes?: StringNullableFilter<"StudentArchive"> | string | null
    metadata?: JsonNullableFilter<"StudentArchive">
    archivedAt?: DateTimeFilter<"StudentArchive"> | Date | string
  }

  export type StudentArchiveOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    className?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherLastName?: SortOrder
    teacherFirstName?: SortOrder
    parentsInfo?: SortOrder
    reportCardUrl?: SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    archivedAt?: SortOrder
  }

  export type StudentArchiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentArchiveWhereInput | StudentArchiveWhereInput[]
    OR?: StudentArchiveWhereInput[]
    NOT?: StudentArchiveWhereInput | StudentArchiveWhereInput[]
    studentId?: StringFilter<"StudentArchive"> | string
    lastName?: StringFilter<"StudentArchive"> | string
    firstName?: StringFilter<"StudentArchive"> | string
    gender?: EnumGenderFilter<"StudentArchive"> | $Enums.Gender
    birthDate?: DateTimeFilter<"StudentArchive"> | Date | string
    email?: StringNullableFilter<"StudentArchive"> | string | null
    phone?: StringNullableFilter<"StudentArchive"> | string | null
    username?: StringNullableFilter<"StudentArchive"> | string | null
    address?: StringNullableFilter<"StudentArchive"> | string | null
    className?: StringFilter<"StudentArchive"> | string
    gradeLevel?: StringFilter<"StudentArchive"> | string
    academicYear?: StringFilter<"StudentArchive"> | string
    teacherLastName?: StringFilter<"StudentArchive"> | string
    teacherFirstName?: StringFilter<"StudentArchive"> | string
    parentsInfo?: JsonFilter<"StudentArchive">
    reportCardUrl?: StringFilter<"StudentArchive"> | string
    notes?: StringNullableFilter<"StudentArchive"> | string | null
    metadata?: JsonNullableFilter<"StudentArchive">
    archivedAt?: DateTimeFilter<"StudentArchive"> | Date | string
  }, "id">

  export type StudentArchiveOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    className?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherLastName?: SortOrder
    teacherFirstName?: SortOrder
    parentsInfo?: SortOrder
    reportCardUrl?: SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    archivedAt?: SortOrder
    _count?: StudentArchiveCountOrderByAggregateInput
    _max?: StudentArchiveMaxOrderByAggregateInput
    _min?: StudentArchiveMinOrderByAggregateInput
  }

  export type StudentArchiveScalarWhereWithAggregatesInput = {
    AND?: StudentArchiveScalarWhereWithAggregatesInput | StudentArchiveScalarWhereWithAggregatesInput[]
    OR?: StudentArchiveScalarWhereWithAggregatesInput[]
    NOT?: StudentArchiveScalarWhereWithAggregatesInput | StudentArchiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentArchive"> | string
    studentId?: StringWithAggregatesFilter<"StudentArchive"> | string
    lastName?: StringWithAggregatesFilter<"StudentArchive"> | string
    firstName?: StringWithAggregatesFilter<"StudentArchive"> | string
    gender?: EnumGenderWithAggregatesFilter<"StudentArchive"> | $Enums.Gender
    birthDate?: DateTimeWithAggregatesFilter<"StudentArchive"> | Date | string
    email?: StringNullableWithAggregatesFilter<"StudentArchive"> | string | null
    phone?: StringNullableWithAggregatesFilter<"StudentArchive"> | string | null
    username?: StringNullableWithAggregatesFilter<"StudentArchive"> | string | null
    address?: StringNullableWithAggregatesFilter<"StudentArchive"> | string | null
    className?: StringWithAggregatesFilter<"StudentArchive"> | string
    gradeLevel?: StringWithAggregatesFilter<"StudentArchive"> | string
    academicYear?: StringWithAggregatesFilter<"StudentArchive"> | string
    teacherLastName?: StringWithAggregatesFilter<"StudentArchive"> | string
    teacherFirstName?: StringWithAggregatesFilter<"StudentArchive"> | string
    parentsInfo?: JsonWithAggregatesFilter<"StudentArchive">
    reportCardUrl?: StringWithAggregatesFilter<"StudentArchive"> | string
    notes?: StringNullableWithAggregatesFilter<"StudentArchive"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"StudentArchive">
    archivedAt?: DateTimeWithAggregatesFilter<"StudentArchive"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    exams?: ExamCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationUncheckedCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    exams?: ExamUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUncheckedUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentParentRelationCreateInput = {
    id?: string
    student: UserCreateNestedOneWithoutParentsInput
    parent: UserCreateNestedOneWithoutChildrenInput
  }

  export type StudentParentRelationUncheckedCreateInput = {
    id?: string
    studentId: string
    parentId: string
  }

  export type StudentParentRelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student?: UserUpdateOneRequiredWithoutParentsNestedInput
    parent?: UserUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type StudentParentRelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentParentRelationCreateManyInput = {
    id?: string
    studentId: string
    parentId: string
  }

  export type StudentParentRelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StudentParentRelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutTaughtClassesInput
    subjects?: SubjectCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    teacherId: string
    createdAt?: Date | string
    subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTaughtClassesNestedInput
    subjects?: SubjectUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    teacherId: string
    createdAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutSubjectsInput
    teacher: UserCreateNestedOneWithoutTaughtSubjectsInput
    lessons?: LessonCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentCreateNestedManyWithoutSubjectInput
    exams?: ExamCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    classId: string
    teacherId: string
    createdAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutSubjectInput
    exams?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
    teacher?: UserUpdateOneRequiredWithoutTaughtSubjectsNestedInput
    lessons?: LessonUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUpdateManyWithoutSubjectNestedInput
    exams?: ExamUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    exams?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    classId: string
    teacherId: string
    createdAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    id?: string
    enrolledAt?: Date | string
    class: ClassCreateNestedOneWithoutEnrollmentsInput
    student: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    classId: string
    studentId: string
    enrolledAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutEnrollmentsNestedInput
    student?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    classId: string
    studentId: string
    enrolledAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    subjectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyInput = {
    id?: string
    title: string
    content: string
    subjectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutAssignmentsInput
    teacher: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    subjectId: string
    teacherId: string
    createdAt?: Date | string
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutAssignmentsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateManyInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    subjectId: string
    teacherId: string
    createdAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamCreateInput = {
    id?: string
    title: string
    description: string
    examDate: Date | string
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutExamsInput
    teacher: UserCreateNestedOneWithoutExamsInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    examDate: Date | string
    subjectId: string
    teacherId: string
    createdAt?: Date | string
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutExamsNestedInput
    teacher?: UserUpdateOneRequiredWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamCreateManyInput = {
    id?: string
    title: string
    description: string
    examDate: Date | string
    subjectId: string
    teacherId: string
    createdAt?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutAttendancesInput
    class: ClassCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    studentId: string
    classId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAttendancesNestedInput
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    studentId: string
    classId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentArchiveCreateInput = {
    id?: string
    studentId: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    address?: string | null
    className: string
    gradeLevel: string
    academicYear: string
    teacherLastName: string
    teacherFirstName: string
    parentsInfo: JsonNullValueInput | InputJsonValue
    reportCardUrl: string
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    archivedAt?: Date | string
  }

  export type StudentArchiveUncheckedCreateInput = {
    id?: string
    studentId: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    address?: string | null
    className: string
    gradeLevel: string
    academicYear: string
    teacherLastName: string
    teacherFirstName: string
    parentsInfo: JsonNullValueInput | InputJsonValue
    reportCardUrl: string
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    archivedAt?: Date | string
  }

  export type StudentArchiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    teacherLastName?: StringFieldUpdateOperationsInput | string
    teacherFirstName?: StringFieldUpdateOperationsInput | string
    parentsInfo?: JsonNullValueInput | InputJsonValue
    reportCardUrl?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentArchiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    teacherLastName?: StringFieldUpdateOperationsInput | string
    teacherFirstName?: StringFieldUpdateOperationsInput | string
    parentsInfo?: JsonNullValueInput | InputJsonValue
    reportCardUrl?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentArchiveCreateManyInput = {
    id?: string
    studentId: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    address?: string | null
    className: string
    gradeLevel: string
    academicYear: string
    teacherLastName: string
    teacherFirstName: string
    parentsInfo: JsonNullValueInput | InputJsonValue
    reportCardUrl: string
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    archivedAt?: Date | string
  }

  export type StudentArchiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    teacherLastName?: StringFieldUpdateOperationsInput | string
    teacherFirstName?: StringFieldUpdateOperationsInput | string
    parentsInfo?: JsonNullValueInput | InputJsonValue
    reportCardUrl?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentArchiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    teacherLastName?: StringFieldUpdateOperationsInput | string
    teacherFirstName?: StringFieldUpdateOperationsInput | string
    parentsInfo?: JsonNullValueInput | InputJsonValue
    reportCardUrl?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type StudentParentRelationListRelationFilter = {
    every?: StudentParentRelationWhereInput
    some?: StudentParentRelationWhereInput
    none?: StudentParentRelationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentParentRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentParentRelationStudentIdParentIdCompoundUniqueInput = {
    studentId: string
    parentId: string
  }

  export type StudentParentRelationCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
  }

  export type StudentParentRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
  }

  export type StudentParentRelationMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnrollmentClassIdStudentIdCompoundUniqueInput = {
    classId: string
    studentId: string
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    enrolledAt?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    enrolledAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    enrolledAt?: SortOrder
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    examDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    examDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    examDate?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StudentArchiveCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    address?: SortOrder
    className?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherLastName?: SortOrder
    teacherFirstName?: SortOrder
    parentsInfo?: SortOrder
    reportCardUrl?: SortOrder
    notes?: SortOrder
    metadata?: SortOrder
    archivedAt?: SortOrder
  }

  export type StudentArchiveMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    address?: SortOrder
    className?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherLastName?: SortOrder
    teacherFirstName?: SortOrder
    reportCardUrl?: SortOrder
    notes?: SortOrder
    archivedAt?: SortOrder
  }

  export type StudentArchiveMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    address?: SortOrder
    className?: SortOrder
    gradeLevel?: SortOrder
    academicYear?: SortOrder
    teacherLastName?: SortOrder
    teacherFirstName?: SortOrder
    reportCardUrl?: SortOrder
    notes?: SortOrder
    archivedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ClassCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput> | ExamCreateWithoutTeacherInput[] | ExamUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutTeacherInput | ExamCreateOrConnectWithoutTeacherInput[]
    createMany?: ExamCreateManyTeacherInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type StudentParentRelationCreateNestedManyWithoutParentInput = {
    create?: XOR<StudentParentRelationCreateWithoutParentInput, StudentParentRelationUncheckedCreateWithoutParentInput> | StudentParentRelationCreateWithoutParentInput[] | StudentParentRelationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentParentRelationCreateOrConnectWithoutParentInput | StudentParentRelationCreateOrConnectWithoutParentInput[]
    createMany?: StudentParentRelationCreateManyParentInputEnvelope
    connect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
  }

  export type StudentParentRelationCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentParentRelationCreateWithoutStudentInput, StudentParentRelationUncheckedCreateWithoutStudentInput> | StudentParentRelationCreateWithoutStudentInput[] | StudentParentRelationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentParentRelationCreateOrConnectWithoutStudentInput | StudentParentRelationCreateOrConnectWithoutStudentInput[]
    createMany?: StudentParentRelationCreateManyStudentInputEnvelope
    connect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput> | ExamCreateWithoutTeacherInput[] | ExamUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutTeacherInput | ExamCreateOrConnectWithoutTeacherInput[]
    createMany?: ExamCreateManyTeacherInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type StudentParentRelationUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<StudentParentRelationCreateWithoutParentInput, StudentParentRelationUncheckedCreateWithoutParentInput> | StudentParentRelationCreateWithoutParentInput[] | StudentParentRelationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentParentRelationCreateOrConnectWithoutParentInput | StudentParentRelationCreateOrConnectWithoutParentInput[]
    createMany?: StudentParentRelationCreateManyParentInputEnvelope
    connect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
  }

  export type StudentParentRelationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentParentRelationCreateWithoutStudentInput, StudentParentRelationUncheckedCreateWithoutStudentInput> | StudentParentRelationCreateWithoutStudentInput[] | StudentParentRelationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentParentRelationCreateOrConnectWithoutStudentInput | StudentParentRelationCreateOrConnectWithoutStudentInput[]
    createMany?: StudentParentRelationCreateManyStudentInputEnvelope
    connect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type ClassUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutTeacherInput | AssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutTeacherInput | AssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutTeacherInput | AssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput> | ExamCreateWithoutTeacherInput[] | ExamUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutTeacherInput | ExamCreateOrConnectWithoutTeacherInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutTeacherInput | ExamUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ExamCreateManyTeacherInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutTeacherInput | ExamUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutTeacherInput | ExamUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type StudentParentRelationUpdateManyWithoutParentNestedInput = {
    create?: XOR<StudentParentRelationCreateWithoutParentInput, StudentParentRelationUncheckedCreateWithoutParentInput> | StudentParentRelationCreateWithoutParentInput[] | StudentParentRelationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentParentRelationCreateOrConnectWithoutParentInput | StudentParentRelationCreateOrConnectWithoutParentInput[]
    upsert?: StudentParentRelationUpsertWithWhereUniqueWithoutParentInput | StudentParentRelationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StudentParentRelationCreateManyParentInputEnvelope
    set?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    disconnect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    delete?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    connect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    update?: StudentParentRelationUpdateWithWhereUniqueWithoutParentInput | StudentParentRelationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StudentParentRelationUpdateManyWithWhereWithoutParentInput | StudentParentRelationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StudentParentRelationScalarWhereInput | StudentParentRelationScalarWhereInput[]
  }

  export type StudentParentRelationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentParentRelationCreateWithoutStudentInput, StudentParentRelationUncheckedCreateWithoutStudentInput> | StudentParentRelationCreateWithoutStudentInput[] | StudentParentRelationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentParentRelationCreateOrConnectWithoutStudentInput | StudentParentRelationCreateOrConnectWithoutStudentInput[]
    upsert?: StudentParentRelationUpsertWithWhereUniqueWithoutStudentInput | StudentParentRelationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentParentRelationCreateManyStudentInputEnvelope
    set?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    disconnect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    delete?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    connect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    update?: StudentParentRelationUpdateWithWhereUniqueWithoutStudentInput | StudentParentRelationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentParentRelationUpdateManyWithWhereWithoutStudentInput | StudentParentRelationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentParentRelationScalarWhereInput | StudentParentRelationScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutTeacherInput | AssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutTeacherInput | AssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutTeacherInput | AssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput> | ExamCreateWithoutTeacherInput[] | ExamUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutTeacherInput | ExamCreateOrConnectWithoutTeacherInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutTeacherInput | ExamUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ExamCreateManyTeacherInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutTeacherInput | ExamUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutTeacherInput | ExamUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type StudentParentRelationUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<StudentParentRelationCreateWithoutParentInput, StudentParentRelationUncheckedCreateWithoutParentInput> | StudentParentRelationCreateWithoutParentInput[] | StudentParentRelationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentParentRelationCreateOrConnectWithoutParentInput | StudentParentRelationCreateOrConnectWithoutParentInput[]
    upsert?: StudentParentRelationUpsertWithWhereUniqueWithoutParentInput | StudentParentRelationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StudentParentRelationCreateManyParentInputEnvelope
    set?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    disconnect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    delete?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    connect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    update?: StudentParentRelationUpdateWithWhereUniqueWithoutParentInput | StudentParentRelationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StudentParentRelationUpdateManyWithWhereWithoutParentInput | StudentParentRelationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StudentParentRelationScalarWhereInput | StudentParentRelationScalarWhereInput[]
  }

  export type StudentParentRelationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentParentRelationCreateWithoutStudentInput, StudentParentRelationUncheckedCreateWithoutStudentInput> | StudentParentRelationCreateWithoutStudentInput[] | StudentParentRelationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentParentRelationCreateOrConnectWithoutStudentInput | StudentParentRelationCreateOrConnectWithoutStudentInput[]
    upsert?: StudentParentRelationUpsertWithWhereUniqueWithoutStudentInput | StudentParentRelationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentParentRelationCreateManyStudentInputEnvelope
    set?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    disconnect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    delete?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    connect?: StudentParentRelationWhereUniqueInput | StudentParentRelationWhereUniqueInput[]
    update?: StudentParentRelationUpdateWithWhereUniqueWithoutStudentInput | StudentParentRelationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentParentRelationUpdateManyWithWhereWithoutStudentInput | StudentParentRelationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentParentRelationScalarWhereInput | StudentParentRelationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutParentsInput = {
    create?: XOR<UserCreateWithoutParentsInput, UserUncheckedCreateWithoutParentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChildrenInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutParentsNestedInput = {
    create?: XOR<UserCreateWithoutParentsInput, UserUncheckedCreateWithoutParentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentsInput
    upsert?: UserUpsertWithoutParentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParentsInput, UserUpdateWithoutParentsInput>, UserUncheckedUpdateWithoutParentsInput>
  }

  export type UserUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    upsert?: UserUpsertWithoutChildrenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChildrenInput, UserUpdateWithoutChildrenInput>, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserCreateNestedOneWithoutTaughtClassesInput = {
    create?: XOR<UserCreateWithoutTaughtClassesInput, UserUncheckedCreateWithoutTaughtClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaughtClassesInput
    connect?: UserWhereUniqueInput
  }

  export type SubjectCreateNestedManyWithoutClassInput = {
    create?: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput> | SubjectCreateWithoutClassInput[] | SubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutClassInput | SubjectCreateOrConnectWithoutClassInput[]
    createMany?: SubjectCreateManyClassInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutClassInput = {
    create?: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput> | EnrollmentCreateWithoutClassInput[] | EnrollmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutClassInput | EnrollmentCreateOrConnectWithoutClassInput[]
    createMany?: EnrollmentCreateManyClassInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput> | SubjectCreateWithoutClassInput[] | SubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutClassInput | SubjectCreateOrConnectWithoutClassInput[]
    createMany?: SubjectCreateManyClassInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput> | EnrollmentCreateWithoutClassInput[] | EnrollmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutClassInput | EnrollmentCreateOrConnectWithoutClassInput[]
    createMany?: EnrollmentCreateManyClassInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTaughtClassesNestedInput = {
    create?: XOR<UserCreateWithoutTaughtClassesInput, UserUncheckedCreateWithoutTaughtClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaughtClassesInput
    upsert?: UserUpsertWithoutTaughtClassesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaughtClassesInput, UserUpdateWithoutTaughtClassesInput>, UserUncheckedUpdateWithoutTaughtClassesInput>
  }

  export type SubjectUpdateManyWithoutClassNestedInput = {
    create?: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput> | SubjectCreateWithoutClassInput[] | SubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutClassInput | SubjectCreateOrConnectWithoutClassInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutClassInput | SubjectUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SubjectCreateManyClassInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutClassInput | SubjectUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutClassInput | SubjectUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutClassNestedInput = {
    create?: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput> | EnrollmentCreateWithoutClassInput[] | EnrollmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutClassInput | EnrollmentCreateOrConnectWithoutClassInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutClassInput | EnrollmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: EnrollmentCreateManyClassInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutClassInput | EnrollmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutClassInput | EnrollmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput> | SubjectCreateWithoutClassInput[] | SubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutClassInput | SubjectCreateOrConnectWithoutClassInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutClassInput | SubjectUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SubjectCreateManyClassInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutClassInput | SubjectUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutClassInput | SubjectUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput> | EnrollmentCreateWithoutClassInput[] | EnrollmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutClassInput | EnrollmentCreateOrConnectWithoutClassInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutClassInput | EnrollmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: EnrollmentCreateManyClassInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutClassInput | EnrollmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutClassInput | EnrollmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSubjectsInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaughtSubjectsInput = {
    create?: XOR<UserCreateWithoutTaughtSubjectsInput, UserUncheckedCreateWithoutTaughtSubjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaughtSubjectsInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutSubjectInput = {
    create?: XOR<LessonCreateWithoutSubjectInput, LessonUncheckedCreateWithoutSubjectInput> | LessonCreateWithoutSubjectInput[] | LessonUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutSubjectInput | LessonCreateOrConnectWithoutSubjectInput[]
    createMany?: LessonCreateManySubjectInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput> | AssignmentCreateWithoutSubjectInput[] | AssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubjectInput | AssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: AssignmentCreateManySubjectInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput> | ExamCreateWithoutSubjectInput[] | ExamUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | ExamCreateOrConnectWithoutSubjectInput[]
    createMany?: ExamCreateManySubjectInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<LessonCreateWithoutSubjectInput, LessonUncheckedCreateWithoutSubjectInput> | LessonCreateWithoutSubjectInput[] | LessonUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutSubjectInput | LessonCreateOrConnectWithoutSubjectInput[]
    createMany?: LessonCreateManySubjectInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput> | AssignmentCreateWithoutSubjectInput[] | AssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubjectInput | AssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: AssignmentCreateManySubjectInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput> | ExamCreateWithoutSubjectInput[] | ExamUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | ExamCreateOrConnectWithoutSubjectInput[]
    createMany?: ExamCreateManySubjectInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type ClassUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSubjectsInput
    upsert?: ClassUpsertWithoutSubjectsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutSubjectsInput, ClassUpdateWithoutSubjectsInput>, ClassUncheckedUpdateWithoutSubjectsInput>
  }

  export type UserUpdateOneRequiredWithoutTaughtSubjectsNestedInput = {
    create?: XOR<UserCreateWithoutTaughtSubjectsInput, UserUncheckedCreateWithoutTaughtSubjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaughtSubjectsInput
    upsert?: UserUpsertWithoutTaughtSubjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaughtSubjectsInput, UserUpdateWithoutTaughtSubjectsInput>, UserUncheckedUpdateWithoutTaughtSubjectsInput>
  }

  export type LessonUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<LessonCreateWithoutSubjectInput, LessonUncheckedCreateWithoutSubjectInput> | LessonCreateWithoutSubjectInput[] | LessonUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutSubjectInput | LessonCreateOrConnectWithoutSubjectInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutSubjectInput | LessonUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: LessonCreateManySubjectInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutSubjectInput | LessonUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutSubjectInput | LessonUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput> | AssignmentCreateWithoutSubjectInput[] | AssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubjectInput | AssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutSubjectInput | AssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AssignmentCreateManySubjectInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutSubjectInput | AssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutSubjectInput | AssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput> | ExamCreateWithoutSubjectInput[] | ExamUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | ExamCreateOrConnectWithoutSubjectInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutSubjectInput | ExamUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ExamCreateManySubjectInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutSubjectInput | ExamUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutSubjectInput | ExamUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<LessonCreateWithoutSubjectInput, LessonUncheckedCreateWithoutSubjectInput> | LessonCreateWithoutSubjectInput[] | LessonUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutSubjectInput | LessonCreateOrConnectWithoutSubjectInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutSubjectInput | LessonUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: LessonCreateManySubjectInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutSubjectInput | LessonUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutSubjectInput | LessonUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput> | AssignmentCreateWithoutSubjectInput[] | AssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubjectInput | AssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutSubjectInput | AssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AssignmentCreateManySubjectInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutSubjectInput | AssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutSubjectInput | AssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput> | ExamCreateWithoutSubjectInput[] | ExamUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | ExamCreateOrConnectWithoutSubjectInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutSubjectInput | ExamUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ExamCreateManySubjectInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutSubjectInput | ExamUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutSubjectInput | ExamUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<ClassCreateWithoutEnrollmentsInput, ClassUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutEnrollmentsInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<ClassCreateWithoutEnrollmentsInput, ClassUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutEnrollmentsInput
    upsert?: ClassUpsertWithoutEnrollmentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutEnrollmentsInput, ClassUpdateWithoutEnrollmentsInput>, ClassUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SubjectCreateNestedOneWithoutLessonsInput = {
    create?: XOR<SubjectCreateWithoutLessonsInput, SubjectUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutLessonsInput
    connect?: SubjectWhereUniqueInput
  }

  export type SubjectUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<SubjectCreateWithoutLessonsInput, SubjectUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutLessonsInput
    upsert?: SubjectUpsertWithoutLessonsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutLessonsInput, SubjectUpdateWithoutLessonsInput>, SubjectUncheckedUpdateWithoutLessonsInput>
  }

  export type SubjectCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<SubjectCreateWithoutAssignmentsInput, SubjectUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAssignmentsInput
    connect?: SubjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type SubjectUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<SubjectCreateWithoutAssignmentsInput, SubjectUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAssignmentsInput
    upsert?: SubjectUpsertWithoutAssignmentsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutAssignmentsInput, SubjectUpdateWithoutAssignmentsInput>, SubjectUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SubjectCreateNestedOneWithoutExamsInput = {
    create?: XOR<SubjectCreateWithoutExamsInput, SubjectUncheckedCreateWithoutExamsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutExamsInput
    connect?: SubjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExamsInput = {
    create?: XOR<UserCreateWithoutExamsInput, UserUncheckedCreateWithoutExamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamsInput
    connect?: UserWhereUniqueInput
  }

  export type SubjectUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<SubjectCreateWithoutExamsInput, SubjectUncheckedCreateWithoutExamsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutExamsInput
    upsert?: SubjectUpsertWithoutExamsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutExamsInput, SubjectUpdateWithoutExamsInput>, SubjectUncheckedUpdateWithoutExamsInput>
  }

  export type UserUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<UserCreateWithoutExamsInput, UserUncheckedCreateWithoutExamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamsInput
    upsert?: UserUpsertWithoutExamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamsInput, UserUpdateWithoutExamsInput>, UserUncheckedUpdateWithoutExamsInput>
  }

  export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    connect?: ClassWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type UserUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    upsert?: UserUpsertWithoutAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendancesInput, UserUpdateWithoutAttendancesInput>, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type ClassUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    upsert?: ClassUpsertWithoutAttendancesInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAttendancesInput, ClassUpdateWithoutAttendancesInput>, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ClassCreateWithoutTeacherInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    createdAt?: Date | string
    subjects?: SubjectCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    createdAt?: Date | string
    subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassCreateManyTeacherInputEnvelope = {
    data: ClassCreateManyTeacherInput | ClassCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutTeacherInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutSubjectsInput
    lessons?: LessonCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentCreateNestedManyWithoutSubjectInput
    exams?: ExamCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    description?: string | null
    classId: string
    createdAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutSubjectInput
    exams?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectCreateManyTeacherInputEnvelope = {
    data: SubjectCreateManyTeacherInput | SubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    subjectId: string
    createdAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutTeacherInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type AssignmentCreateManyTeacherInputEnvelope = {
    data: AssignmentCreateManyTeacherInput | AssignmentCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ExamCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    examDate: Date | string
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutExamsInput
  }

  export type ExamUncheckedCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    examDate: Date | string
    subjectId: string
    createdAt?: Date | string
  }

  export type ExamCreateOrConnectWithoutTeacherInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput>
  }

  export type ExamCreateManyTeacherInputEnvelope = {
    data: ExamCreateManyTeacherInput | ExamCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutStudentInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    classId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutStudentInput = {
    id?: string
    enrolledAt?: Date | string
    class: ClassCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentInput = {
    id?: string
    classId: string
    enrolledAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentCreateManyStudentInputEnvelope = {
    data: EnrollmentCreateManyStudentInput | EnrollmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentParentRelationCreateWithoutParentInput = {
    id?: string
    student: UserCreateNestedOneWithoutParentsInput
  }

  export type StudentParentRelationUncheckedCreateWithoutParentInput = {
    id?: string
    studentId: string
  }

  export type StudentParentRelationCreateOrConnectWithoutParentInput = {
    where: StudentParentRelationWhereUniqueInput
    create: XOR<StudentParentRelationCreateWithoutParentInput, StudentParentRelationUncheckedCreateWithoutParentInput>
  }

  export type StudentParentRelationCreateManyParentInputEnvelope = {
    data: StudentParentRelationCreateManyParentInput | StudentParentRelationCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type StudentParentRelationCreateWithoutStudentInput = {
    id?: string
    parent: UserCreateNestedOneWithoutChildrenInput
  }

  export type StudentParentRelationUncheckedCreateWithoutStudentInput = {
    id?: string
    parentId: string
  }

  export type StudentParentRelationCreateOrConnectWithoutStudentInput = {
    where: StudentParentRelationWhereUniqueInput
    create: XOR<StudentParentRelationCreateWithoutStudentInput, StudentParentRelationUncheckedCreateWithoutStudentInput>
  }

  export type StudentParentRelationCreateManyStudentInputEnvelope = {
    data: StudentParentRelationCreateManyStudentInput | StudentParentRelationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassUpdateManyWithWhereWithoutTeacherInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    gradeLevel?: StringFilter<"Class"> | string
    academicYear?: StringFilter<"Class"> | string
    teacherId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
  }

  export type SubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type SubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    classId?: StringFilter<"Subject"> | string
    teacherId?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutTeacherInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutTeacherInput, AssignmentUncheckedUpdateWithoutTeacherInput>
    create: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutTeacherInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutTeacherInput, AssignmentUncheckedUpdateWithoutTeacherInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutTeacherInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutTeacherInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    subjectId?: StringFilter<"Assignment"> | string
    teacherId?: StringFilter<"Assignment"> | string
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type ExamUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutTeacherInput, ExamUncheckedUpdateWithoutTeacherInput>
    create: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutTeacherInput, ExamUncheckedUpdateWithoutTeacherInput>
  }

  export type ExamUpdateManyWithWhereWithoutTeacherInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ExamScalarWhereInput = {
    AND?: ExamScalarWhereInput | ExamScalarWhereInput[]
    OR?: ExamScalarWhereInput[]
    NOT?: ExamScalarWhereInput | ExamScalarWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    examDate?: DateTimeFilter<"Exam"> | Date | string
    subjectId?: StringFilter<"Exam"> | string
    teacherId?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    classId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    classId?: StringFilter<"Enrollment"> | string
    studentId?: StringFilter<"Enrollment"> | string
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type StudentParentRelationUpsertWithWhereUniqueWithoutParentInput = {
    where: StudentParentRelationWhereUniqueInput
    update: XOR<StudentParentRelationUpdateWithoutParentInput, StudentParentRelationUncheckedUpdateWithoutParentInput>
    create: XOR<StudentParentRelationCreateWithoutParentInput, StudentParentRelationUncheckedCreateWithoutParentInput>
  }

  export type StudentParentRelationUpdateWithWhereUniqueWithoutParentInput = {
    where: StudentParentRelationWhereUniqueInput
    data: XOR<StudentParentRelationUpdateWithoutParentInput, StudentParentRelationUncheckedUpdateWithoutParentInput>
  }

  export type StudentParentRelationUpdateManyWithWhereWithoutParentInput = {
    where: StudentParentRelationScalarWhereInput
    data: XOR<StudentParentRelationUpdateManyMutationInput, StudentParentRelationUncheckedUpdateManyWithoutParentInput>
  }

  export type StudentParentRelationScalarWhereInput = {
    AND?: StudentParentRelationScalarWhereInput | StudentParentRelationScalarWhereInput[]
    OR?: StudentParentRelationScalarWhereInput[]
    NOT?: StudentParentRelationScalarWhereInput | StudentParentRelationScalarWhereInput[]
    id?: StringFilter<"StudentParentRelation"> | string
    studentId?: StringFilter<"StudentParentRelation"> | string
    parentId?: StringFilter<"StudentParentRelation"> | string
  }

  export type StudentParentRelationUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentParentRelationWhereUniqueInput
    update: XOR<StudentParentRelationUpdateWithoutStudentInput, StudentParentRelationUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentParentRelationCreateWithoutStudentInput, StudentParentRelationUncheckedCreateWithoutStudentInput>
  }

  export type StudentParentRelationUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentParentRelationWhereUniqueInput
    data: XOR<StudentParentRelationUpdateWithoutStudentInput, StudentParentRelationUncheckedUpdateWithoutStudentInput>
  }

  export type StudentParentRelationUpdateManyWithWhereWithoutStudentInput = {
    where: StudentParentRelationScalarWhereInput
    data: XOR<StudentParentRelationUpdateManyMutationInput, StudentParentRelationUncheckedUpdateManyWithoutStudentInput>
  }

  export type UserCreateWithoutParentsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    exams?: ExamCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutParentsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutParentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentsInput, UserUncheckedCreateWithoutParentsInput>
  }

  export type UserCreateWithoutChildrenInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    exams?: ExamCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    parents?: StudentParentRelationCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutChildrenInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    parents?: StudentParentRelationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutChildrenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
  }

  export type UserUpsertWithoutParentsInput = {
    update: XOR<UserUpdateWithoutParentsInput, UserUncheckedUpdateWithoutParentsInput>
    create: XOR<UserCreateWithoutParentsInput, UserUncheckedCreateWithoutParentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParentsInput, UserUncheckedUpdateWithoutParentsInput>
  }

  export type UserUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    exams?: ExamUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutChildrenInput = {
    update: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChildrenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    exams?: ExamUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    parents?: StudentParentRelationUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    parents?: StudentParentRelationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutTaughtClassesInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtSubjects?: SubjectCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    exams?: ExamCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutTaughtClassesInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtSubjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationUncheckedCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutTaughtClassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaughtClassesInput, UserUncheckedCreateWithoutTaughtClassesInput>
  }

  export type SubjectCreateWithoutClassInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutTaughtSubjectsInput
    lessons?: LessonCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentCreateNestedManyWithoutSubjectInput
    exams?: ExamCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    description?: string | null
    teacherId: string
    createdAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutSubjectInput
    exams?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutClassInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput>
  }

  export type SubjectCreateManyClassInputEnvelope = {
    data: SubjectCreateManyClassInput | SubjectCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutClassInput = {
    id?: string
    enrolledAt?: Date | string
    student: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutClassInput = {
    id?: string
    studentId: string
    enrolledAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutClassInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput>
  }

  export type EnrollmentCreateManyClassInputEnvelope = {
    data: EnrollmentCreateManyClassInput | EnrollmentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutClassInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutClassInput = {
    id?: string
    studentId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceCreateManyClassInputEnvelope = {
    data: AttendanceCreateManyClassInput | AttendanceCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTaughtClassesInput = {
    update: XOR<UserUpdateWithoutTaughtClassesInput, UserUncheckedUpdateWithoutTaughtClassesInput>
    create: XOR<UserCreateWithoutTaughtClassesInput, UserUncheckedCreateWithoutTaughtClassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaughtClassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaughtClassesInput, UserUncheckedUpdateWithoutTaughtClassesInput>
  }

  export type UserUpdateWithoutTaughtClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtSubjects?: SubjectUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    exams?: ExamUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutTaughtClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtSubjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUncheckedUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectUpsertWithWhereUniqueWithoutClassInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutClassInput, SubjectUncheckedUpdateWithoutClassInput>
    create: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutClassInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutClassInput, SubjectUncheckedUpdateWithoutClassInput>
  }

  export type SubjectUpdateManyWithWhereWithoutClassInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutClassInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutClassInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutClassInput, EnrollmentUncheckedUpdateWithoutClassInput>
    create: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutClassInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutClassInput, EnrollmentUncheckedUpdateWithoutClassInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutClassInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutClassInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutClassInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassCreateWithoutSubjectsInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutTaughtClassesInput
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSubjectsInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    teacherId: string
    createdAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSubjectsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
  }

  export type UserCreateWithoutTaughtSubjectsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    exams?: ExamCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutTaughtSubjectsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationUncheckedCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutTaughtSubjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaughtSubjectsInput, UserUncheckedCreateWithoutTaughtSubjectsInput>
  }

  export type LessonCreateWithoutSubjectInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUncheckedCreateWithoutSubjectInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonCreateOrConnectWithoutSubjectInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutSubjectInput, LessonUncheckedCreateWithoutSubjectInput>
  }

  export type LessonCreateManySubjectInputEnvelope = {
    data: LessonCreateManySubjectInput | LessonCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutSubjectInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutSubjectInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    teacherId: string
    createdAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutSubjectInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type AssignmentCreateManySubjectInputEnvelope = {
    data: AssignmentCreateManySubjectInput | AssignmentCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ExamCreateWithoutSubjectInput = {
    id?: string
    title: string
    description: string
    examDate: Date | string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutExamsInput
  }

  export type ExamUncheckedCreateWithoutSubjectInput = {
    id?: string
    title: string
    description: string
    examDate: Date | string
    teacherId: string
    createdAt?: Date | string
  }

  export type ExamCreateOrConnectWithoutSubjectInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput>
  }

  export type ExamCreateManySubjectInputEnvelope = {
    data: ExamCreateManySubjectInput | ExamCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutSubjectsInput = {
    update: XOR<ClassUpdateWithoutSubjectsInput, ClassUncheckedUpdateWithoutSubjectsInput>
    create: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutSubjectsInput, ClassUncheckedUpdateWithoutSubjectsInput>
  }

  export type ClassUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTaughtClassesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutTaughtSubjectsInput = {
    update: XOR<UserUpdateWithoutTaughtSubjectsInput, UserUncheckedUpdateWithoutTaughtSubjectsInput>
    create: XOR<UserCreateWithoutTaughtSubjectsInput, UserUncheckedCreateWithoutTaughtSubjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaughtSubjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaughtSubjectsInput, UserUncheckedUpdateWithoutTaughtSubjectsInput>
  }

  export type UserUpdateWithoutTaughtSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    exams?: ExamUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutTaughtSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUncheckedUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type LessonUpsertWithWhereUniqueWithoutSubjectInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutSubjectInput, LessonUncheckedUpdateWithoutSubjectInput>
    create: XOR<LessonCreateWithoutSubjectInput, LessonUncheckedCreateWithoutSubjectInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutSubjectInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutSubjectInput, LessonUncheckedUpdateWithoutSubjectInput>
  }

  export type LessonUpdateManyWithWhereWithoutSubjectInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutSubjectInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    subjectId?: StringFilter<"Lesson"> | string
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutSubjectInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutSubjectInput, AssignmentUncheckedUpdateWithoutSubjectInput>
    create: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutSubjectInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutSubjectInput, AssignmentUncheckedUpdateWithoutSubjectInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutSubjectInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ExamUpsertWithWhereUniqueWithoutSubjectInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutSubjectInput, ExamUncheckedUpdateWithoutSubjectInput>
    create: XOR<ExamCreateWithoutSubjectInput, ExamUncheckedCreateWithoutSubjectInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutSubjectInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutSubjectInput, ExamUncheckedUpdateWithoutSubjectInput>
  }

  export type ExamUpdateManyWithWhereWithoutSubjectInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ClassCreateWithoutEnrollmentsInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutTaughtClassesInput
    subjects?: SubjectCreateNestedManyWithoutClassInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    teacherId: string
    createdAt?: Date | string
    subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutEnrollmentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutEnrollmentsInput, ClassUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    exams?: ExamCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationUncheckedCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type ClassUpsertWithoutEnrollmentsInput = {
    update: XOR<ClassUpdateWithoutEnrollmentsInput, ClassUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<ClassCreateWithoutEnrollmentsInput, ClassUncheckedCreateWithoutEnrollmentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutEnrollmentsInput, ClassUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ClassUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTaughtClassesNestedInput
    subjects?: SubjectUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    exams?: ExamUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUncheckedUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectCreateWithoutLessonsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutSubjectsInput
    teacher: UserCreateNestedOneWithoutTaughtSubjectsInput
    assignments?: AssignmentCreateNestedManyWithoutSubjectInput
    exams?: ExamCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutLessonsInput = {
    id?: string
    name: string
    description?: string | null
    classId: string
    teacherId: string
    createdAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutSubjectInput
    exams?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutLessonsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutLessonsInput, SubjectUncheckedCreateWithoutLessonsInput>
  }

  export type SubjectUpsertWithoutLessonsInput = {
    update: XOR<SubjectUpdateWithoutLessonsInput, SubjectUncheckedUpdateWithoutLessonsInput>
    create: XOR<SubjectCreateWithoutLessonsInput, SubjectUncheckedCreateWithoutLessonsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutLessonsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutLessonsInput, SubjectUncheckedUpdateWithoutLessonsInput>
  }

  export type SubjectUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
    teacher?: UserUpdateOneRequiredWithoutTaughtSubjectsNestedInput
    assignments?: AssignmentUpdateManyWithoutSubjectNestedInput
    exams?: ExamUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    exams?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutSubjectsInput
    teacher: UserCreateNestedOneWithoutTaughtSubjectsInput
    lessons?: LessonCreateNestedManyWithoutSubjectInput
    exams?: ExamCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    description?: string | null
    classId: string
    teacherId: string
    createdAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutSubjectInput
    exams?: ExamUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutAssignmentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutAssignmentsInput, SubjectUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectCreateNestedManyWithoutTeacherInput
    exams?: ExamCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationUncheckedCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type SubjectUpsertWithoutAssignmentsInput = {
    update: XOR<SubjectUpdateWithoutAssignmentsInput, SubjectUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<SubjectCreateWithoutAssignmentsInput, SubjectUncheckedCreateWithoutAssignmentsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutAssignmentsInput, SubjectUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SubjectUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
    teacher?: UserUpdateOneRequiredWithoutTaughtSubjectsNestedInput
    lessons?: LessonUpdateManyWithoutSubjectNestedInput
    exams?: ExamUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutSubjectNestedInput
    exams?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUpdateManyWithoutTeacherNestedInput
    exams?: ExamUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUncheckedUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectCreateWithoutExamsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutSubjectsInput
    teacher: UserCreateNestedOneWithoutTaughtSubjectsInput
    lessons?: LessonCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutExamsInput = {
    id?: string
    name: string
    description?: string | null
    classId: string
    teacherId: string
    createdAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutExamsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutExamsInput, SubjectUncheckedCreateWithoutExamsInput>
  }

  export type UserCreateWithoutExamsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutExamsInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationUncheckedCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutExamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamsInput, UserUncheckedCreateWithoutExamsInput>
  }

  export type SubjectUpsertWithoutExamsInput = {
    update: XOR<SubjectUpdateWithoutExamsInput, SubjectUncheckedUpdateWithoutExamsInput>
    create: XOR<SubjectCreateWithoutExamsInput, SubjectUncheckedCreateWithoutExamsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutExamsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutExamsInput, SubjectUncheckedUpdateWithoutExamsInput>
  }

  export type SubjectUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
    teacher?: UserUpdateOneRequiredWithoutTaughtSubjectsNestedInput
    lessons?: LessonUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type UserUpsertWithoutExamsInput = {
    update: XOR<UserUpdateWithoutExamsInput, UserUncheckedUpdateWithoutExamsInput>
    create: XOR<UserCreateWithoutExamsInput, UserUncheckedCreateWithoutExamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamsInput, UserUncheckedUpdateWithoutExamsInput>
  }

  export type UserUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUncheckedUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutAttendancesInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    exams?: ExamCreateNestedManyWithoutTeacherInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutAttendancesInput = {
    id?: string
    lastName: string
    firstName: string
    gender: $Enums.Gender
    birthDate: Date | string
    email?: string | null
    phone?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    taughtSubjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    children?: StudentParentRelationUncheckedCreateNestedManyWithoutParentInput
    parents?: StudentParentRelationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
  }

  export type ClassCreateWithoutAttendancesInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutTaughtClassesInput
    subjects?: SubjectCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAttendancesInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    teacherId: string
    createdAt?: Date | string
    subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAttendancesInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
  }

  export type UserUpsertWithoutAttendancesInput = {
    update: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    exams?: ExamUpdateManyWithoutTeacherNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    taughtSubjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    children?: StudentParentRelationUncheckedUpdateManyWithoutParentNestedInput
    parents?: StudentParentRelationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ClassUpsertWithoutAttendancesInput = {
    update: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type ClassUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTaughtClassesNestedInput
    subjects?: SubjectUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyTeacherInput = {
    id?: string
    name: string
    gradeLevel: string
    academicYear: string
    createdAt?: Date | string
  }

  export type SubjectCreateManyTeacherInput = {
    id?: string
    name: string
    description?: string | null
    classId: string
    createdAt?: Date | string
  }

  export type AssignmentCreateManyTeacherInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    subjectId: string
    createdAt?: Date | string
  }

  export type ExamCreateManyTeacherInput = {
    id?: string
    title: string
    description: string
    examDate: Date | string
    subjectId: string
    createdAt?: Date | string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: string
    classId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type EnrollmentCreateManyStudentInput = {
    id?: string
    classId: string
    enrolledAt?: Date | string
  }

  export type StudentParentRelationCreateManyParentInput = {
    id?: string
    studentId: string
  }

  export type StudentParentRelationCreateManyStudentInput = {
    id?: string
    parentId: string
  }

  export type ClassUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
    lessons?: LessonUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUpdateManyWithoutSubjectNestedInput
    exams?: ExamUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    exams?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentParentRelationUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    student?: UserUpdateOneRequiredWithoutParentsNestedInput
  }

  export type StudentParentRelationUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentParentRelationUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentParentRelationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent?: UserUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type StudentParentRelationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentParentRelationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCreateManyClassInput = {
    id?: string
    name: string
    description?: string | null
    teacherId: string
    createdAt?: Date | string
  }

  export type EnrollmentCreateManyClassInput = {
    id?: string
    studentId: string
    enrolledAt?: Date | string
  }

  export type AttendanceCreateManyClassInput = {
    id?: string
    studentId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type SubjectUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTaughtSubjectsNestedInput
    lessons?: LessonUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUpdateManyWithoutSubjectNestedInput
    exams?: ExamUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    exams?: ExamUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManySubjectInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentCreateManySubjectInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    teacherId: string
    createdAt?: Date | string
  }

  export type ExamCreateManySubjectInput = {
    id?: string
    title: string
    description: string
    examDate: Date | string
    teacherId: string
    createdAt?: Date | string
  }

  export type LessonUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}